import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useRef, useLayoutEffect } from "react"; 
import Aos from 'aos';

const Layout = (props, ref) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;