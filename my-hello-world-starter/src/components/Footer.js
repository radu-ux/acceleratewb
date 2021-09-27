import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer_content">
                <div className="footer_logo_section">
                    <h1 className="logo logo_without_margin_l logo_black"><span className="web web_black">WEB</span> <span className="elite">ELITE</span></h1>
                    <p>Aici pentru a-ti duce afacerea la un alt nivel</p>
                </div>
                <div className="footer_sections">
                    <div className="footer_section">
                        <h3>Pagini principale</h3>
                        <div className="links_container">
                            <a href="#">Acasa</a>
                            <a href="#">Despre Noi</a>
                            <a href="#">Servicii</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div className="footer_section">
                        <h3>Servicii</h3>
                        <div className="links_container">
                            <a href="#">Creare site web</a>
                            <a href="#">Optimizari SEO</a>
                            <a href="#">Creare identitate visuala</a>
                            <a href="#">Marketing si campanii Ads</a>
                        </div>
                    </div>
                    <div className="footer_section">
                        <h3>Confidentialitate</h3>
                        <div className="links_container">
                            <a href="#">Termeni si conditii</a>
                            <a href="#">Politica cookie</a>
                        </div>
                    </div>
                    <div className="footer_section">
                        <h3>Date contact</h3>
                        <div className="links_container">
                            <p>WEB-ELLITE SRL</p>
                            <p>CUI: 75221512 | 442/121/2021</p>
                            <p>Telefon: 0765.044.321</p>
                            <p>Email: contact@webelite.ro</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_copyright">
                <p>Copyright © 2022. Toate drepturile rezervate.</p>
            </div>
        </footer>
    )
}
