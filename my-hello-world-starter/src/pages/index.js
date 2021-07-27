import React from "react";
import Logo from '../images/acceleratewb.svg';
import HeroImage from '../images/building_websites.svg';
import FormImage from '../images/undraw_hang_out_h9ud.svg';
import PresentationalWebsiteLogo from '../images/presentational_website.svg'
import OnlineStoreLogo from '../images/online_store.svg';
import MarketingLogo from '../images/marketing.svg';
import SeoLogo from '../images/seo.svg';
import CopywritingLogo from '../images/copywriting.svg';
import { useEffect, useRef, useLayoutEffect } from "react";
import Aos from 'aos';
import { useScrollState } from 'scrollmonitor-hooks';
import 'aos/dist/aos.css';
import './tailwind.css';

export default function Home() {
  const HeroSectionRef = useRef(null);
  const CatchingPhraseRef = useRef(null);
  const headerRef = useRef(null);
  const heroSectionRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const heroSectionScrollState = useScrollState(heroSectionRef);

  useEffect(() => {
    HeroSectionRef.current.className += ' scale-100';
    CatchingPhraseRef.current.className += ' scale-100';
    Aos.init({duration: 800});
  })
  
  useLayoutEffect(() => {
    const heroSectionYPos = heroSectionRef.current.getBoundingClientRect().y
    if(heroSectionYPos < 0 ) {
      headerRef.current.className = "flex justify-between sticky top-0 z-50 bg-white shadow-lg";
      homeRef.current.className = "text-xl mx-8 border-b-2 hover:border-yellow-500 hover:transition duration-300 ease-in border-transparent"; 
      aboutRef.current.className = "text-xl border-b-2 hover:border-yellow-500 hover:transition duration-300 ease-in border-transparent";
      servicesRef.current.className = "text-xl mx-8 border-b-2 hover:border-yellow-500 hover:transition duration-300 ease-in border-transparent";
    } else {
      headerRef.current.className= "flex justify-between sticky top-0 z-50 bg-yellow-500";
      homeRef.current.className = "text-xl mx-8 border-b-2 hover:border-white hover:transition duration-300 ease-in border-transparent text-white"; 
      aboutRef.current.className = "text-xl border-b-2 hover:border-white hover:transition duration-300 ease-in border-transparent text-white"
      servicesRef.current.className = "text-xl mx-8 border-b-2 hover:border-white hover:transition duration-300 ease-in border-transparent text-white"
    }
  }) 
  
  return (
    <div>
        {/* Navigation */}
        <header className="flex justify-between sticky top-0 z-50 bg-yellow-500 font-mono" ref={headerRef}>
          {/* Logo image */}
          <img className="xl:w-36 xl:mx-28 2xl:mx-36" src={Logo}></img>
          {/* Navigation links */}
          <div className="flex justify-around items-center xl:mx-28 2xl:mx-36">
              <a className="text-xl mx-8 border-b-2 hover:border-white hover:transition duration-300 ease-in border-yellow-500 text-white" href="#" ref={homeRef}>Acasa</a>
              <a className="text-xl border-b-2 hover:border-white hover:transition duration-300 ease-in border-yellow-500 text-white" href="#" ref={aboutRef}>Despre Noi</a>
              <a className="text-xl mx-8 border-b-2 hover:border-white hover:transition duration-300 ease-in border-yellow-500 text-white" href="#" ref={servicesRef}>Servicii</a>
          </div>
        </header>
        <main className="font-mono">
          {/* Hero Image section */}
          <div className="flex flex-col pt-16 md:flex-row justify-between scale-0 bg-gradient-to-b from-yellow-500 to-yellow-400" ref={heroSectionRef}>
            {/* Catching phrase */}
            <div className="flex flex-col my-auto xl:ml-28 xl:mb-20 2xl:ml-36 transform transition-all delay-500 duration-500 ease-in-out scale-0" ref={CatchingPhraseRef}>
              <p className="my-18 uppercase xl:text-5xl 2xl:text-7xl font-extrabold text-black">
                Aici pentru a-ti duce afacerea la un alt nivel
              </p>
              <p className="text-2xl font-thin text-black mt-10">Construim websiteuri specifice modelului tau de business</p>
              <p className="text-2xl font-thin text-black py-4">Regandim designul siteului tau curent si ii imbunatatim traficul folosind principiile SEO</p>
              <a className="my-6 py-2 px-2 border-2 rounded-full border-yellow-500 self-center bg-white transition duration-500 ease-in-out hover:bg-black hover:text-white" href="#">
                Afla mai multe
              </a>
            </div>
            {/* Hero Image */}
            <img className="xl:w-5/12 xl:mb-32 2xl:h-1/3 xl:mr-28 2l:mr-36 self-center transform transition-all delay-1000 duration-500 ease-in-out scale-0" src={HeroImage} ref={HeroSectionRef}></img>
          </div>

          {/* Waves for Hero section */}
          <div className="bg-yellow-400">
              <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.500000001"></path>
              <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.500000001"></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.500000003"></path>
              </g>
              <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
              </g>
              </svg>
            </div>

          {/* Services Section */}
          <div className="mt-16 flex flex-col">
            <p className="text-4xl font-semibold self-center capitalize border-b-2 border-yellow-500">Servicii oferite</p>
            <div className="flex flex-col md:flex-row pt-12 justify-center"> 
              {/* Presentational Site */}
              <div data-aos="flip-left" className="flex flex-col border-2 border-gray-200 shadow-xl xl:ml-28 2xl:ml-42 max-w-sm">
                <img className="w-48 h-48 self-center" src={PresentationalWebsiteLogo}></img>
                <p className="text-3xl font-semibold self-center capitalize">Site prezentare</p>
                <p className="pt-10 pb-10 mx-2">Crestem traficul websiteuliui folosind ultimele technologii SEO</p>
                <a className="my-6 py-2 px-2 border-2 rounded-full border-yellow-500 self-center bg-white transition duration-500 ease-in-out hover:bg-yellow-500 hover:text-white" href="#">
                  Descopera
                </a>
              </div>
              {/* Online Store */}
              <div data-aos="flip-left" className="flex flex-col border-2 border-gray-200 shadow-xl mx-10 max-w-sm">
                <img className="w-48 h-48 self-center" src={OnlineStoreLogo}></img>
                <p className="text-3xl font-semibold self-center capitalize">Magazin online</p>
                <p className="pt-10 pb-10 mx-2">Crestem traficul websiteuliui folosind ultimele technologii SEO</p>
                <a className="my-6 py-2 px-2 border-2 rounded-full border-yellow-500 self-center bg-white transition duration-500 ease-in-out hover:bg-yellow-500 hover:text-white" href="#">
                  Descopera
                </a>
              </div>
              {/* Marketing Services */}
              <div data-aos="flip-left" className="flex flex-col border-2 border-gray-200 shadow-xl xl:mr-28 2xl:mr-42 max-w-sm">
              <img className="w-48 h-48 self-center" src={MarketingLogo}></img>
                <p className="text-3xl font-semibold self-center capitalize">Servicii marketing</p>
                <p className="pt-10 pb-10 mx-2">Crestem traficul websiteuliui folosind ultimele technologii SEO</p>
                <a className="my-6 py-2 px-2 border-2 rounded-full border-yellow-500 self-center bg-white transition duration-500 ease-in-out hover:bg-yellow-500 hover:text-white" href="#">
                  Descopera
                </a>
              </div>
            </div>
            
            <div data-aos="flip-left" className="flex flex-col justify-center md:flex-row pt-12"> 
              {/* SEO Otimization */}
              <div className="flex flex-col border-2 border-gray-200 shadow-xl xl:ml-60 mx-10 max-w-sm">
                <img className="w-48 h-48 self-center" src={SeoLogo}></img>
                <p className="text-3xl font-semibold self-center capitalize">Optimizari SEO</p>
                <p className="pt-10 pb-10 mx-2">Crestem traficul websiteuliui folosind ultimele technologii SEO</p>
                <a className="my-6 py-2 px-2 border-2 rounded-full border-yellow-500 self-center bg-white transition duration-500 ease-in-out hover:bg-yellow-500 hover:text-white" href="#">
                  Descopera
                </a>
              </div>
              {/* Copywriting */}
              <div data-aos="flip-left" className="flex flex-col border-2 border-gray-200 shadow-xl xl:mr-60 max-w-sm">
                <img className="w-48 h-48 self-center" src={CopywritingLogo}></img>
                <p className="text-3xl font-semibold self-center capitalize">Copywriting</p>
                <p className="pt-10 pb-10 mx-2">Crestem traficul websiteuliui folosind ultimele technologii SEO</p>
                <a className="my-6 py-2 px-2 border-2 rounded-full border-yellow-500 self-center bg-white transition duration-500 ease-in-out hover:bg-yellow-500 hover:text-white" href="#">
                  Descopera
                </a>
              </div>
            </div>
          </div>
        

          {/* Why work with us section */}
          <div className="mt-16 flex flex-col items-center py-10">
            <p className="text-4xl font-semibold self-center border-b-2 border-yellow-500">De ce sa lucrezi cu noi ?</p>
            {/* Reasons container */}
            <div className="max-w-3xl text-3xl text mt-10 divide-y-4 divide-yellow-500 divide-opacity-50">
              <div data-aos="fade-left" className="mb-10 px-10 py-10 self-start"><span className="text-yellow-500 text-5xl">1.</span> Oferim expertiza ce iti poate duce afacerea la un alt nivel</div>
              <div data-aos="fade-right" className="mb-10 px-10 py-10 self-end"><span className="text-yellow-500 text-5xl">2.</span> Asiguram performante inalte ce contribuie la cresterea considerabila a numarului de clienti</div>
              <div data-aos="fade-left" className="mb-10 px-10 py-10 self-start"><span className="text-yellow-500 text-5xl">3.</span> Dezvoltam in stransa legatura cu clientul pentru a ne asigura ca scopul este atins</div>
              <div data-aos="fade-right" className="mb-10 px-10 py-10 self-end"><span className="text-yellow-500 text-5xl">4.</span> Flexibili si deschisi spre sugestiile clientului in realizarea produsului final</div>
            </div>
          </div>
          {/* Contact us section */}
          {/* Waves for Contact us */}
          <div>
            <div className="bg-yellow-400 mt-10">
              <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                    <g className="wave" fill="#FFFFFF">
                      <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                    </g>
                    <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                      <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                        <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.500000001"></path>
                        <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.500000001"></path>
                        <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.500000003"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-gradient-to-t from-yellow-500 to-yellow-400 flex flex-col py-5">
            <p className="text-5xl font-bold self-center mb-8">Ai intrebari? Scrie-ne oricand</p>
            
            <form className="flex flex-col text-xl w-1/2 mx-auto font-bold pt-10 pb-20">
            
              <label>Email</label>
              <input className="mb-6" type="email"></input>
              
              <label>Nume</label>
              <input className="mb-6" type="text"></input>
              
              <label>Serviciul dorit</label>
              <select className="mb-6">
                <option>Site prezentare</option>
                <option>Magazin online</option>
                <option>Servicii marketing</option>
                <option>Optimizare SEO</option>
                <option>Copywriting</option>
              </select>

              <label>Descrie-ne ideea ta</label>
              <textarea className="mb-6" type="text" placeholder="Optional"></textarea>
            
              <div>
                <label>Doresc sa primesc notificari cu oferte</label>
                <input className="ml-10" type="checkbox"></input>  
              </div>
            </form>
          </div>
        </main>

        <footer className="flex flex-col">
          <div className="flex sm:flex-row xs:flex-col py-10 justify-around">
          <img className="w-36 self-start" src={Logo}></img>
          
          <div className="flex flex-col">
            <p className="uppercase text-yellow-500 font-bold text-opacity-60 mb-4 border-b-2 border-yellow-400">Legaturi</p>
            <a className="capitalize hover:text-gray-500 mb-2" href="#">FAQ</a>
            <a className="capitalize hover:text-gray-500 mb-2" href="#">Ajutor</a>
            <a className="capitalize hover:text-gray-500 mb-2" href="#">Suport</a>
          </div>
          <div className="flex flex-col">
            <p className="uppercase text-yellow-500 font-bold text-opacity-60 mb-4 border-b-2 border-yellow-400">Legal</p>
            <a className="hover:text-gray-500 mb-2" href="#">Termeni</a>
            <a className="capitalize hover:text-gray-500 mb-2" href="#">Conditii</a>
          </div>
          <div className="flex flex-col">
            <p className="uppercase text-yellow-500 font-bold text-opacity-60 mb-4 border-b-2 border-yellow-400">Social</p>
            <a className="capitalize hover:text-gray-500 mb-2" href="#">Facebook</a>
            <a className="capitalize hover:text-gray-500 mb-2 " href="#">Instagram</a>
            <a className="capitalize hover:text-gray-500 mb-2" href="#">Linkedin</a>
          </div>
          <div className="flex flex-col">
            <p className="uppercase text-yellow-500 font-bold text-opacity-60 mb-4 border-b-2 border-yellow-400">Companie</p>
            <a className="capitalize hover:text-gray-500 mb-2" href="#">Blog</a>
            <a className="capitalize hover:text-gray-500 mb-2 mb-2" href="#">Despre Noi</a>
            <a className="capitalize hover:text-gray-500 mb-2 mb-2" href="#">Contact</a>
          </div>
          </div>
          <span className="text-xs py-4 font-bold text-yellow-500 self-center">
            @2021 | acceleratewb.ro Toate drepturile rezervate
          </span>
        </footer>
    </div>
  )
} 
