import React from 'react'
import '../styles/CallToAction.css';

export default function CallToAction() {
    return (
        <div className="call_to_action_section">
            <h2 className="section_title title_white">De ce sa lucrezi cu noi ?</h2>
            <div className="reasons_container">
                <div className="reason">
                    <span className="reason_no">1</span>
                    <h3 className="reason_title">Gazduire web si mentenanta</h3>
                    <p className="reason_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam aut ipsam itaque rem nostrum error assumenda suscipit totam saepe. Numquam, nam?</p>
                </div>
                <div className="reason">
                    <span className="reason_no special_reason_no">2</span>
                    <h3 className="reason_title">Sedinta consultanta</h3>
                    <p className="reason_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam aut ipsam itaque rem nostrum error assumenda suscipit totam saepe. Numquam, nam?</p>
                </div>
                <div className="reason">
                    <span className="reason_no special_reason_no">3</span>
                    <h3 className="reason_title">Pret accesibil</h3>
                    <p className="reason_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam aut ipsam itaque rem nostrum error assumenda suscipit totam saepe. Numquam, nam?</p>
                </div>
                <div className="reason">
                    <span className="reason_no special_reason_no">4</span>
                    <h3 className="reason_title">Dezvoltare end-to-end</h3>
                    <p className="reason_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam aut ipsam itaque rem nostrum error assumenda suscipit totam saepe. Numquam, nam?</p>
                </div>
            </div>
            <a className="section_button" href="#">Hai sa discutam !</a>
        </div>
    )
}
