import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => {
    const logoImageProperties = useStaticQuery(graphql`
        query LogoImgQuery {
            mobileLogo: file(relativePath: {eq: "acceleratewb.png"}) {
            id
            childImageSharp {
                fixed(width: 150, quality: 100) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }

            desktopLogo: file(relativePath: {eq: "acceleratewb.png"}) {
                id
                childImageSharp {
                    fixed(width: 190, quality: 100) {
                        ...GatsbyImageSharpFixed
                        }
                    }
                }
        }
    `);

    const sources = [
        logoImageProperties.mobileLogo.childImageSharp.fixed, 
        {
            ...logoImageProperties.desktopLogo.childImageSharp.fixed,
            media:'(min-width: 756px)'
        }
    ]

    return (
        <Img fixed={sources} className="my-2"/>
    );
}

export default Logo;

