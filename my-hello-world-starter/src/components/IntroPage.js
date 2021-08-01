import React from 'react';
import PresentationalWebsiteLogo from '../images/presentational_website.svg'
import OnlineStoreLogo from '../images/online_store.svg';
import MarketingLogo from '../images/marketing.svg';
import SeoLogo from '../images/seo.svg';
import CopywritingLogo from '../images/copywriting.svg';
import Aos from 'aos';
import ContactUs from './ContactUs';
import { useEffect, useRef, useLayoutEffect } from "react";

const IntroPage = () => {
    useEffect(() => {
      Aos.init({duration: 800});
    })

    return (
        <main className="font-mono">
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
          <div className="flex flex-col mx-auto mt-10 lg:flex-row lg:justify-center lg:mx-28"> 
            {/* Presentational Site */}
            <div data-aos="flip-left" className="flex flex-col border-2 border-gray-200 shadow-xl max-w-sm">
              <img className="w-48 h-48 self-center" src={PresentationalWebsiteLogo}></img>
              <p className="text-3xl font-semibold self-center capitalize">Site prezentare</p>
              <p className="pt-10 pb-10 mx-2">Crestem traficul websiteuliui folosind ultimele technologii SEO</p>
              <a className="my-6 py-2 px-2 border-2 rounded-full border-yellow-500 self-center bg-white transition duration-500 ease-in-out hover:bg-yellow-500 hover:text-white" href="#">
                Descopera
              </a>
            </div>
            {/* Online Store */}
            <div data-aos="flip-left" className="flex flex-col border-2 border-gray-200 shadow-xl max-w-sm my-10 lg:mx-10 lg:my-0">
              <img className="w-48 h-48 self-center" src={OnlineStoreLogo}></img>
              <p className="text-3xl font-semibold self-center capitalize">Magazin online</p>
              <p className="pt-10 pb-10 mx-2">Crestem traficul websiteuliui folosind ultimele technologii SEO</p>
              <a className="my-6 py-2 px-2 border-2 rounded-full border-yellow-500 self-center bg-white transition duration-500 ease-in-out hover:bg-yellow-500 hover:text-white" href="#">
                Descopera
              </a>
            </div>
            {/* Marketing Services */}
            <div data-aos="flip-left" className="flex flex-col border-2 border-gray-200 shadow-xl max-w-sm">
            <img className="w-48 h-48 self-center" src={MarketingLogo}></img>
              <p className="text-3xl font-semibold self-center capitalize">Servicii marketing</p>
              <p className="pt-10 pb-10 mx-2">Crestem traficul websiteuliui folosind ultimele technologii SEO</p>
              <a className="my-6 py-2 px-2 border-2 rounded-full border-yellow-500 self-center bg-white transition duration-500 ease-in-out hover:bg-yellow-500 hover:text-white" href="#">
                Descopera
              </a>
            </div>
           
          </div>
          
          <div className="flex flex-col mx-auto mt-10 lg:flex-row lg:justify-center lg:mx-64">
              {/* SEO Otimization */}
              <div data-aos="flip-left"  className="flex flex-col border-2 border-gray-200 shadow-xl max-w-sm mb-5 lg:mb-0 lg:mr-5">
                <img className="w-48 h-48 self-center" src={SeoLogo}></img>
                <p className="text-3xl font-semibold self-center capitalize">Optimizari SEO</p>
                <p className="pt-10 pb-10 mx-2">Crestem traficul websiteuliui folosind ultimele technologii SEO</p>
                <a className="my-6 py-2 px-2 border-2 rounded-full border-yellow-500 self-center bg-white transition duration-500 ease-in-out hover:bg-yellow-500 hover:text-white" href="#">
                  Descopera
                </a>
              </div>
              {/* Copywriting */}
              <div data-aos="flip-left" className="flex flex-col border-2 border-gray-200 shadow-xl max-w-sm mt-5 lg:mt-0 lg:ml-5">
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
        <ContactUs />
      </main>
    ); 
}

export default IntroPage;