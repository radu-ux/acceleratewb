import React from 'react'
import '../styles/index.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Services from '../components/Services'
import CallToAction from '../components/CallToAction'
import Technologies from '../components/Technologies'
import Testimonials from '../components/Testimonials'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Technologies />
      <Main />
      <Services />
      <CallToAction />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
