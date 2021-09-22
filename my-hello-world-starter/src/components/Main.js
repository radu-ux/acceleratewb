import React from 'react'
import BusinessImg200 from '../images/business_cgrxyp/business_200.jpg'
import BusinessImg455 from '../images/business_cgrxyp/business_455.jpg'
import BusinessImg635 from '../images/business_cgrxyp/business_635.jpg'
import BusinessImg857 from '../images/business_cgrxyp/business_857.jpg'
import BusinessImg1007 from '../images/business_cgrxyp/business_1007.jpg'
import BusinessImg1227 from '../images/business_cgrxyp/business_1227.jpg'
import BusinessImg1360 from '../images/business_cgrxyp/business_1360.jpg'
import BusinessImg1400 from '../images/business_cgrxyp/business_1400.jpg'
import '../styles/Main.css'

export default function Main() {
    return (
        <section className="main_section">
            <div className="section_description">
                <div>
                    <p className="section_subtitle">Domeniul de activitate</p>
                    <h2 className="section_title">Dezvoltam solutii web ultra rapide</h2>
                </div> 
                <p className="description_text">
                    Suntem o companie specializata in dezvolatrea de solutii software care sa iti 
                    creasca businessul prin intermediul tehnologiei. 

                </p>
                <a className="contact_button" href="#">Contacteaza-ne</a>
                
            </div>
            {/* <img src={BusinessImg} alt="creare-website-img"></img> */}
            <img sizes='(max-width: 1400px) 100vw, 1400px'
                 srcSet={`${BusinessImg200} 200w,
                          ${BusinessImg455} 455w,
                          ${BusinessImg635} 635w,
                          ${BusinessImg857} 857w,
                          ${BusinessImg1007} 1007w,
                          ${BusinessImg1227} 1227w,
                          ${BusinessImg1360} 1360w,
                          ${BusinessImg1400} 1400w`}
                 src={`${BusinessImg1400}`}
                 alt='creare-website-img'/>
        </section>
    )
}
