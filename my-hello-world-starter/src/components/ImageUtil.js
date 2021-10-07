import React from 'react'
// Images for WEB SITE service 
import Coding1035 from '../images/coding_g9oa81/coding_1035.jpg'
import Coding1279 from '../images/coding_g9oa81/coding_1279.jpg'
import Coding1440 from '../images/coding_g9oa81/coding_1400.jpg'
import Coding200 from '../images/coding_g9oa81/coding_200.jpg'
import Coding611 from '../images/coding_g9oa81/coding_611.jpg'
// Images for SEO service
import SEO200 from '../images/seo_usyjao/seo_200.jpg';
import SEO610 from '../images/seo_usyjao/seo_610.jpg';
import SEO894 from '../images/seo_usyjao/seo_894.jpg';
import SEO1065 from '../images/seo_usyjao/seo_1065.jpg';
import SEO1227 from '../images/seo_usyjao/seo_1227.jpg';
import SEO1335 from '../images/seo_usyjao/seo_1335.jpg';
import SEO1400 from '../images/seo_usyjao/seo_1400.jpg';
// Images for CONTENT WRITING service
import ContentWriting200 from '../images/content-writing_ocbje9/content-writing_200.jpg'
import ContentWriting578 from '../images/content-writing_ocbje9/content-writing_578.jpg'
import ContentWriting850 from '../images/content-writing_ocbje9/content-writing_850.jpg'
import ContentWriting1067 from '../images/content-writing_ocbje9/content-writing_1067.jpg'
import ContentWriting1265 from '../images/content-writing_ocbje9/content-writing_1265.jpg'
import ContentWriting1397 from '../images/content-writing_ocbje9/content-writing_1397.jpg'
import ContentWriting1400 from '../images/content-writing_ocbje9/content-writing_1400.jpg'
// Images for MARKETING service
import Marketing200 from '../images/marketing_kczxh6/marketing_200.jpg'
import Marketing532 from '../images/marketing_kczxh6/marketing_532.jpg'
import Marketing775 from '../images/marketing_kczxh6/marketing_775.jpg'
import Marketing978 from '../images/marketing_kczxh6/marketing_978.jpg'
import Marketing1192 from '../images/marketing_kczxh6/marketing_1192.jpg'
import Marketing1373 from '../images/marketing_kczxh6/marketing_1373.jpg'
import Marketing1400 from '../images/marketing_kczxh6/marketing_1400.jpg'

export const CodingImage = () => {
    return (
        <>
            <img
                sizes="(max-width: 1400px) 100vw, 1400px"
                srcset={`${Coding200} 200w,
                         ${Coding611} 611w,
                         ${Coding1035} 1035w.
                         ${Coding1279} 1279w,
                         ${Coding1440} 1400w`}
                src={`${Coding1440}`}
                alt="creare-website"
                className="service_image"></img>
        </>
    );
}

export const SeoImage = () => {
   return (
        <>
            <img
                sizes="(max-width: 1400px) 100vw, 1400px"
                srcset={`${SEO200} 200w,
                        ${SEO610} 610w,
                        ${SEO894} 894w.
                        ${SEO1065} 1065w,
                        ${SEO1227} 1227w,
                        ${SEO1335} 1335w,
                        ${SEO1400} 1400w`}
                src={`${Coding1440}`}
                alt="seo"
                className="service_image"></img>
        </>
    );
}

export const ContentWritingImage = () => {
    return (
         <>
             <img
                 sizes="(max-width: 1400px) 100vw, 1400px"
                 srcset={`${ContentWriting200} 200w,
                          ${ContentWriting578} 578w,
                          ${ContentWriting850} 850w.
                          ${ContentWriting1067} 1067w,
                          ${ContentWriting1265} 1265w,
                          ${ContentWriting1397} 1397w,
                          ${ContentWriting1400} 1400w`}
                 src={`${Coding1440}`}
                 alt="creare-continut"
                 className="service_image"></img>
         </>
     );
 }

 export const MarketingImage = () => {
    return (
         <>
             <img
                 sizes="(max-width: 1400px) 100vw, 1400px"
                 srcset={`${Marketing200} 200w,
                          ${Marketing532} 532w,
                          ${Marketing775} 775w.
                          ${Marketing978} 978w,
                          ${Marketing1192} 1192w,
                          ${Marketing1373} 1373w,
                          ${Marketing1400} 1400w`}
                 src={`${Coding1440}`}
                 alt="marketing"
                 className="service_image"></img>
         </>
     );
 }