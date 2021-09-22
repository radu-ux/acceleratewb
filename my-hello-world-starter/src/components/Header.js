import React from 'react'
import '../styles/Header.css'
import { useRef, useState, useEffect } from 'react'

function App() {
  const [isHeaderIntersecting, setIsHeaderIntersecting] = useState(null);
  const targetRef = useRef(null);

  const options = {
    root:null,
    rootMargin: "-200px 0px 0px 0px"
  }

  const callback = (entries, observer) => {
    const [entry] = entries;
    console.log(entry);
    setIsHeaderIntersecting(entry.isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const target = targetRef.current;

    if(target) observer.observe(target);

    return () => {
      if(target) observer.unobserve(target);
    }
  })


  return (
    <div className="App">
      <header className={isHeaderIntersecting ? "hide_header_bg" : "show_header_bg"}>  
        <h1 className="logo"><span className="web">WEB</span>-<span className="elite">ELITE</span></h1>
        <input type="checkbox" id="nav-toggle" className="nav_toggle" />
        <nav>
          <ul className="main_nav">
            <li className="nav_link"><a href="#">Acasa</a></li>
            <li className="nav_link"><a href="#">Despre Noi</a></li>
            <li className="nav_link"><a href="#">Servicii</a></li>
            <li className="nav_link"><a href="#">Blog</a></li>
            <li className="nav_link"><a href="#">Contact</a></li>
          </ul>
        </nav>
        <label for="nav-toggle" className="nav_toggle_label">
          <span></span>
        </label>
      </header>
      <div className="hero_section">
        <h1 className="hero_title utility" ref={targetRef}>
          Esti pregatit pentru a-ti <span className="hero_catch_word">creste</span> afacerea ? 
        </h1>
        <h2 className="hero_text utility">
          Oferim servicii web de inalta calitate
        </h2> 
        <a className="hero_button utility" href="#">Afla mai multe</a> 
      </div>
    </div>
   );
}

export default App;
