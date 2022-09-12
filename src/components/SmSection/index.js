import React from 'react';
import { SectionContainer, SmContainer } from './SmElements';
import { FaLinkedin, FaTwitterSquare, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import '../../App.css';


const SmSection = () => {
  return (
    <>
    <SectionContainer>
      <SmContainer> 
          <Link 
           to={{ pathname: ""}}
           target='_blank'
           aria-label='LinkedIn'>
          <FaLinkedin className='unuscolor-txt' style={{fontSize: '30px'}}/>
          </Link>
          <Link
          to={{ pathname: ""}}
          target='_blank'
          aria-label='Twitter'>
          <FaTwitterSquare className='unuscolor-txt' style={{fontSize: '30px'}}/>
          </Link>
          <Link
          to={{ pathname: ""}}
          target='_blank'
          aria-label='Instagram'
          >
          <FaInstagram className='unuscolor-txt' style={{fontSize: '30px'}}/>  
          </Link>
          <Link
          to={{ pathname: ""}}
          target='_blank'
          aria-label='Facebook'>
          <FaFacebookSquare className='unuscolor-txt' style={{fontSize: '30px'}}/>
          </Link>
      </SmContainer>
    </SectionContainer>
    </>
  )
}

export default SmSection