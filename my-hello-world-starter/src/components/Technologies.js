import React from 'react'
import '../styles/Technologies.css'
import ReactLogo from '../images/t-logos/react-logo.svg'
import GatsbyLogo from '../images/t-logos/gatsby-logo.svg'
import CloudinaryLogo from '../images/t-logos/cloudinary-logo.svg'
import TailwindCSSLogo from '../images/t-logos/tailwindcss-logo.svg'

export default function Technologies() {
    return (
        <section className="technologies_section_container">
            <div className="section_title_container">
                <p className="section_subtitle special_color">Aria de tehnologii</p>
            </div>
            <div className="technologies_badge_container">
                <a href="#" className="t_logo">
                    <img src={ReactLogo} alt="creare-website-react"/>
                </a>
                <a href="#" className="t_logo">
                    <img src={TailwindCSSLogo} alt="creare-website-tailwindcss"/>
                </a>
                <a href="#" className="t_logo">
                    <img src={GatsbyLogo} alt="creare-website-gatsby"/>
                </a>
                <a href="#" className="t_logo">
                    <img src={CloudinaryLogo} alt="creare-website-cloudinary"/>
                </a>
            </div>
        </section>
    )
}
