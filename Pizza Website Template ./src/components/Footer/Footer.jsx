import React from 'react'
import {
    FaFacebook,FaInstagram
} from 'react-icons/fa'


import {FooterContainer, FooterFinal,SocialMedia,SocialIcon,SocialIconLink, SocialIcons,SocialMediaFin} from './FooterStyles'
 const Footer = () => {
    return (
        <FooterContainer>
            <FooterFinal>
                <SocialMedia>
                    <SocialMediaFin>
                    <SocialIcon to='/'>Sam's Pizza 🍕</SocialIcon>
                    <SocialIcons>
                    <SocialIconLink href= "/"
                    target="_blank"
                    aria-label="Facebook">
                        <FaFacebook />


                    </SocialIconLink>

                    <SocialIconLink href= "/"
                    target="_blank"
                    aria-label="Instagram">
                        <FaInstagram />


                    </SocialIconLink>
                            </SocialIcons>
                            </SocialMediaFin>
                </SocialMedia>
            </FooterFinal>
        </FooterContainer>
    )
}

export default Footer
