import React from "react";
import Services from "../components/index-page-components/Services";
import CompanyDescription from "../components/index-page-components/CompanyDescription";
import Technologies from "../components/index-page-components/Technologies";
import Separator from "../components/index-page-components/Separator";
import Layout from "../components/Layout";
import IndexPageLayout from "../components/index-page-components/IndexPageLayout";
import './tailwind.css';
import "aos/dist/aos.css";

export default function Home() {
  return (
    <Layout>
      <IndexPageLayout>
        <CompanyDescription />
        <Services />
        <Separator />
        <Technologies />
      </IndexPageLayout>
    </Layout>
  )
} 
