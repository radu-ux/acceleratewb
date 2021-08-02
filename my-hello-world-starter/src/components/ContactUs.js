import React, { useState } from 'react';
import ContactUsAnimation from '../animations/contact_us_animation.json';
import LottieAnimation from './LottieAnimation';
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const [email, setEmail] = useState('');

    const sendConfirmationEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_ti62jil', 'template_zcv7z9a', event.target, 'user_VqK1ShbkW7hJe8kHAX2FY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        event.target.reset()
    };

    return (
        <>
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

            <div className="bg-gradient-to-t from-yellow-500 to-yellow-400 flex flex-col py-5">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold self-center mb-8">
                Ai intrebari? Scrie-ne <span className="hidden md:inline-flex">oricand</span>
            </p>
            <div className="flex flex-col md:flex-row"> 
                <form className="flex flex-col text-xl w-1/2 mx-auto font-bold pt-10 pb-20" onSubmit={sendConfirmationEmail}>
                
                    <label>Email</label>
                    <input className="mb-6" type="email" name="email_client" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                    
                    <label>Nume</label>
                    <input className="mb-6" name="nume_client" type="text"></input>
                    
                    <label>Serviciul dorit</label>
                    <select className="mb-6" name="serviciu_dorit">
                        <option>Site prezentare</option>
                        <option>Magazin online</option>
                        <option>Servicii marketing</option>
                        <option>Optimizare SEO</option>
                        <option>Copywriting</option>
                    </select>

                    <label>Descrie-ne ideea ta</label>
                    <textarea className="mb-6" name="ideea_ta" type="text" placeholder="Optional"></textarea>
                    
                    <div>
                        <label>Doresc sa primesc notificari cu oferte</label>
                        <input className="ml-10" type="checkbox"></input>  
                    </div>

                    <input type="submit" value="Trimite" className="my-6 py-2 px-8 border-4 border-double rounded-full border-yellow-500 self-center bg-white transition duration-500 ease-in-out hover:bg-black hover:text-white">
                    </input>
                </form>
                <div className="self-center md:mb-44 mx-auto hidden md:flex">
                <LottieAnimation animation={ContactUsAnimation} width={350} height={350} />
                </div>
            </div>
            </div>
        </>
    );
}

export default ContactUs;