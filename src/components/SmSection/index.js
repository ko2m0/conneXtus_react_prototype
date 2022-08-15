import React from 'react';
import { SectionContainer, SmContainer } from './SmElements';
import { FaLinkedin, FaTwitterSquare, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import '../../App.css';


const SmSection = () => {
  return (
    <>
    <SectionContainer>
      <SmContainer> 
          <FaLinkedin className='unuscolor-txt' style={{fontSize: '30px'}}/>
          <FaTwitterSquare className='unuscolor-txt' style={{fontSize: '30px'}}/>
        <FaInstagram className='unuscolor-txt' style={{fontSize: '30px'}}/>
        <FaFacebookSquare className='unuscolor-txt' style={{fontSize: '30px'}}/>
      </SmContainer>
    </SectionContainer>
    </>
  )
}

export default SmSection