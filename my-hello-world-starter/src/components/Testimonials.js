import React from 'react'
import '../styles/Testimonials.css'
import Person1 from '../images/testimonials/smiling_man.png'
import Person2 from '../images/testimonials/smiling_man_2.jpg'
import Person3 from '../images/testimonials/smiling_woman.jpg'

export default function Testimonials() {
    return (
        <div className="testimonials_section_container">
            <h2 className="section_title align_title">Ce spun clientii nostri</h2>
            <div className="testimonial_cards_container">
                <div className="testimonial_card">
                    <p className="person_review">
                        “Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat nulla pellentesque.”
                    </p>
                    <div className="person_info_container">
                        <img className="person_pic" src={Person1} alt="person-1"/>  
                        <div className="name_and_title_container">
                            <h4 className="person_name">John German</h4>
                            <h4 className="person_title">CEO Decathlon</h4>
                        </div>
                    </div>
                </div>
                <div className="testimonial_card">
                    <p className="person_review">
                        “Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat nulla pellentesque.”
                    </p>
                    <div className="person_info_container">
                        <img className="person_pic" src={Person2} alt="person-1"/>  
                        <div className="name_and_title_container">
                            <h4 className="person_name">John German</h4>
                            <h4 className="person_title">CEO Decathlon</h4>
                        </div>
                    </div>
                </div>
                <div className="testimonial_card last_card">
                    <p className="person_review">
                        “Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat nulla pellentesque.”
                    </p>
                    <div className="person_info_container">
                        <img className="person_pic" src={Person3} alt="person-1"/>  
                        <div className="name_and_title_container">
                            <h4 className="person_name">John German</h4>
                            <h4 className="person_title">CEO Decathlon</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
