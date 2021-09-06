import React from "react";
import Navigation from "./Navigation";
import Footer from './Footer';
import { PageFont } from "./styled-components";

const Layout = ({children}) => { 
    return (
        <PageFont className="overflow-hidden"> 
            <Navigation />
            {children}
            <Footer />
        </PageFont>
    );
} 

export default Layout;