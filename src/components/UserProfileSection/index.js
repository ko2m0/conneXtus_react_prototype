import React from 'react'
import '../../App.css';
import { ProfileWsSection, NameSection, ProfilePicSection, SectionContainer, UserProfileContainer } from './UserElements'
import { FaRegCompass, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserProfileSection = ({professional}) => {
  return (
    <>
    <SectionContainer>
      <UserProfileContainer>
        <ProfilePicSection>
        <svg width="60" height="60">
        <circle fill="#E5E4E2" stroke="#ff9900" strokeWidth="2" cx="30" cy="30" r="28"></circle>  
          <mask id="svgMask">
            <circle fill="#ffffff" cx="30" cy="30" r="25"></circle>  
          </mask>
          <image xlinkHref={professional.profile_photo} mask="url(#svgMask)"
           height="95%"
           width="100%"          
          ></image>
        </svg>
        </ProfilePicSection>
        <NameSection>
            <ul className='nameSection-ul'>
              <li className='nameSection-li'>
                <p className='unuscolor-txt nameSection-name'>{professional.first_name.concat(' ', professional.last_name)}</p>
              </li>
              <li>
                <p className='unuscolor-txt nameSection-profession'>{professional.credential}</p>
              </li>
            </ul>
        </NameSection>
        <ProfileWsSection>
            <Link
            to={{ pathname: ""}}
            target='_blank'
            aria-label='website'
            >
            <FaRegCompass className='duocolor-txt' style={{fontSize: '25px', margin: '0 10px'}} />
            </Link>
            <FaUserPlus style={{fontSize: '25px' , color: 'gray', margin: '0 10px'}}/>
        </ProfileWsSection>
      </UserProfileContainer>
    </SectionContainer>
    </>
  )
}

export default UserProfileSection