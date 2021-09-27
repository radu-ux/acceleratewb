import React from 'react'
import '../styles/ContactUs.css'
import ContactUsImg200 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_200.png'
import ContactUsImg352 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_352.png'
import ContactUsImg462 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_462.png'
import ContactUsImg559 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_559.png'
import ContactUsImg639 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_639.png'
import ContactUsImg716 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_716.png'
import ContactUsImg784 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_784.png'
import ContactUsImg850 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_850.png'
import ContactUsImg911 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_911.png'
import ContactUsImg975 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_975.png'
import ContactUsImg1025 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_1025.png'
import ContactUsImg1072 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_1072.png'
import ContactUsImg1123 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_1123.png'
import ContactUsImg1172 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_1172.png'
import ContactUsImg1222 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_1222.png'
import ContactUsImg1333 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_1233.png'
import ContactUsImg1337 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_1337.png'
import ContactUsImg1365 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_1365.png'
import ContactUsImg1397 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_1397.png'
import ContactUsImg1400 from '../images/contact-us-cropped_sliv0e/contact-us-cropped_sliv0e_c_scale,w_1400.png'

export default function ContactUs() {
    return (
        <section className="contact_us_section_container">
            <div className="contact_us_img">
                <div className="overlay"></div>
                <h2 className="section_title title_white contact_us_title">Hai sa discutam</h2>
                <p className="contact_us_subtitle title_white">Raspundem in decursul unei zile lucratoare</p>
            </div>
            <form>
                <p className="form_title">Completeaza formularul pentru a primi o sedinta de consultanta gratuita</p>
                <div className="input_container">
                    <input type="text" id="name" placeholder="dummy placeholder" required pattern=".*"></input>
                    <label htmlFor="name"><span> Nume </span></label>
                </div>
                <div className="input_container">
                    <input type="text" id="firstname" placeholder="dummy placeholder" required pattern=".*"></input>
                    <label htmlFor="firstname"><span> Prenume </span></label>
                </div>
                <div className="input_container">
                    <input type="email" id="email" placeholder="dummy placeholder" required></input>
                    <label htmlFor="email"><span> Email </span></label>
                </div>
                <div className="input_container">
                    <input type="tel" id="telephone" placeholder="dummy placeholder" required pattern="0[7,2][0-9]{8}"></input>
                    <label htmlFor="telephone"><span> Telefon </span></label>
                </div>
                <div className="select_container">
                    <select id="service" required>
                        <option value="Website" selected="selected">Site Web</option>
                        <option value="SEO">SEO</option>
                        <option value="Branding&Marketing">Branding & Marketing</option>
                    </select>
                    <label htmlFor="service"><span> Serviciul dorit </span></label>
                </div>
                <button>Trimite</button>
            </form>
        </section>
    )
}
