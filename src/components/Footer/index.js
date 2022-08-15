import React from 'react'
import { FooterContainer, FooterLogoContainer } from './FooterElements'
import logo from '../../img/Connextus_logo4ws.svg';


const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterLogoContainer>
          <img src={logo} alt="ConneXtus" className='footer-logo' />
        </FooterLogoContainer>
    </FooterContainer>
    </>
  )
}

export default Footer