import React from 'react'
import '../styles/Services.css'

const WebsiteIcon = () => {
    return (
        <div className="service_icon_container">
            <svg class="fill-current text-green-500" width="32" height="30" viewBox="0 0 24 22" fill="#2563EB"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.3333 0C22.0406 0 22.7189 0.280951 23.219 0.781048C23.719 1.28115 24 1.95942 24 2.66667V18.6667C24 19.3739 23.719 20.0522 23.219 20.5523C22.7189 21.0524 22.0406 21.3333 21.3333 21.3333H2.66667C1.95942 21.3333 1.28115 21.0524 0.781048 20.5523C0.280951 20.0522 0 19.3739 0 18.6667V2.66667C0 1.95942 0.280951 1.28115 0.781048 0.781048C1.28115 0.280951 1.95942 0 2.66667 0H21.3333ZM21.3333 18.6667V5.33333H2.66667V18.6667H21.3333Z" />
            </svg>
        </div>
    );
}

const SEOIcon = () => {
    return (
        <div className="service_icon_container">
            <svg class="fill-current text-green-500" width="32" height="30" viewBox="0 0 24 24" fill="#2563EB"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.66667 0C10.9652 0 13.1696 0.913092 14.7949 2.53841C16.4202 4.16372 17.3333 6.36812 17.3333 8.66667C17.3333 10.8133 16.5467 12.7867 15.2533 14.3067L15.6133 14.6667H16.6667L23.3333 21.3333L21.3333 23.3333L14.6667 16.6667V15.6133L14.3067 15.2533C12.7341 16.5957 10.7343 17.3332 8.66667 17.3333C6.36812 17.3333 4.16372 16.4202 2.53841 14.7949C0.913092 13.1696 0 10.9652 0 8.66667C0 6.36812 0.913092 4.16372 2.53841 2.53841C4.16372 0.913092 6.36812 0 8.66667 0V0ZM8.66667 2.66667C5.33333 2.66667 2.66667 5.33333 2.66667 8.66667C2.66667 12 5.33333 14.6667 8.66667 14.6667C12 14.6667 14.6667 12 14.6667 8.66667C14.6667 5.33333 12 2.66667 8.66667 2.66667Z" />
            </svg>
        </div>
    );
}

const BrandingAndMArketingIcon = () => {
    return (
        <div className="service_icon_container">
            <svg class="fill-current text-blue-500" width="32" height="30" viewBox="0 0 32 30" fill="#2563EB"
                xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M26.6667 24V18.6667H22.6667V20H20V18.6667H12V20H9.33333V18.6667H5.33333V24H26.6667ZM8.44 10.6667L6.12 16H9.33333V14.6667H12V16H20V14.6667H22.6667V16H25.88L23.56 10.6667H8.44ZM12 6.66667V8H20V6.66667H12ZM29.12 16.8133C29.2533 17.1067 29.3333 17.4533 29.3333 17.88V24C29.3333 24.7067 29.0533 25.3333 28.5333 25.88C28 26.4133 27.4 26.6667 26.6667 26.6667H5.33333C4.6 26.6667 4 26.4133 3.46666 25.88C2.94666 25.3333 2.66666 24.7067 2.66666 24V17.88C2.66666 17.4533 2.74666 17.1067 2.88 16.8133L6 9.62667C6.45333 8.54667 7.26666 8 8.44 8H9.33333V6.66667C9.33333 5.93333 9.57333 5.33333 10.0933 4.78667C10.6133 4.26667 11.2533 4 12 4H20C20.7467 4 21.3867 4.26667 21.9067 4.78667C22.4267 5.33333 22.6667 5.93333 22.6667 6.66667V8H23.56C24.7333 8 25.5467 8.54667 26 9.62667L29.12 16.8133Z" />
                </svg>
        </div>
    );
}

const ITSolutionsIcon = () => {
    return (
        <div className="service_icon_container">
            <svg class="fill-current text-blue-500" width="32" height="30" viewBox="0 0 24 29" fill="#ff6347"
                xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21.3333 7H18.6667C18.6667 3.26667 15.7333 0.333336 12 0.333336C8.26667 0.333336 5.33333 3.26667 5.33333 7H2.66667C1.2 7 0 8.2 0 9.66667V25.6667C0 27.1333 1.2 28.3333 2.66667 28.3333H21.3333C22.8 28.3333 24 27.1333 24 25.6667V9.66667C24 8.2 22.8 7 21.3333 7ZM12 3C14.2667 3 16 4.73334 16 7H8C8 4.73334 9.73333 3 12 3ZM21.3333 25.6667H2.66667V9.66667H21.3333V25.6667ZM12 15C9.73333 15 8 13.2667 8 11H5.33333C5.33333 14.7333 8.26667 17.6667 12 17.6667C15.7333 17.6667 18.6667 14.7333 18.6667 11H16C16 13.2667 14.2667 15 12 15Z" />
            </svg>
        </div>
    );
}


export default function Services() {
    return (
        <section className="services_section">
            <div className="section_title_container">
                <p className="section_subtitle">Solutii software</p>
                <h2 className="section_title">Serviciile Oferite</h2>
            </div>
            <div className="cards_container">
                <div className="service_card">
                    <div className="service_caption">
                        <WebsiteIcon />
                        <h2 className="service_title">Siteuri Web</h2>
                    </div>
                    <p className="service_description">
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    </p>
                    <a className="service_button" href="#">Afla mai multe</a>
                </div>
                <div className="service_card">
                    <div className="service_caption">
                        <SEOIcon />
                        <h2 className="service_title">SEO</h2>
                    </div>
                    <p className="service_description">
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    </p>
                    <a className="service_button" href="#">Afla mai multe</a>
                </div>
                <div className="service_card">
                    <div className="service_caption">
                        <BrandingAndMArketingIcon />
                        <h2 className="service_title">Branding & Marketing</h2>
                    </div>
                    <p className="service_description">
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    </p>
                    <a className="service_button" href="#">Afla mai multe</a>
                </div>
            </div>
        </section>
    )
}
