import React from 'react'
import { CodingImage, SeoImage, ContentWritingImage, MarketingImage } from './ImageUtil'
import MarketingImg from '../images/marketing.jpg'
import MarketingIcon from '../images/s-icons/marketing.svg'
import SEOIcon from '../images/s-icons/seo.svg'
import ContentWritingIcon from '../images/s-icons/content-writing.svg'
import WebSiteIcon from '../images/s-icons/website.svg'
import '../styles/NewServices.css'

export default function Services() {
    return (
        <section className="new_services_section">
            <div className="section_title_container">
                <p className="section_subtitle">Solutii software</p>
                <h2 className="section_title_big">Serviciile Oferite</h2>
            </div>
            <div className="container">
                <a href="#" className="service">
                    <CodingImage/>
                    <div className="base_content_container">
                        <img src={WebSiteIcon} alt="creare-website-icon" className="icon"/>
                        <p className="service_title">Site Web</p>
                    </div>
                    <div className="overlay"></div>
                </a>
                <a href="#" className="service">
                    <SeoImage />
                    <div className="base_content_container">
                        <img src={SEOIcon} alt="seo-icon" className="icon"/>
                        <p className="service_title">SEO</p>
                    </div>
                    <div className="overlay"></div>
                </a>
                <a href="#" className="service">
                    <ContentWritingImage />
                    <div className="base_content_container">
                        <img src={ContentWritingIcon} alt="creare-continut-icon" className="icon"/>
                        <p className="service_title">Creare Continut</p>
                    </div>
                    <div className="overlay"></div>
                </a>
                <a href="#" className="service">
                    <MarketingImage />
                    <div className="base_content_container">
                        <img src={MarketingIcon} alt="marketing-icon" className="icon"/>
                        <p className="service_title">Marketing</p>
                    </div>
                    <div className="overlay"></div>
                </a>
            </div>
            {/* <div className="divider"></div> */}
        </section>
    )
}
