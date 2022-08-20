import React from 'react'
import '../../App.css';
import { ProfileWsSection, NameSection, ProfilePicSection, SectionContainer, UserProfileContainer } from './UserElements'
import { FaRegCompass, FaUserPlus } from 'react-icons/fa'
import user_img from '../../img/user2.jpg';

const UserProfileSection = ({professional}) => {
  return (
    <>
    <SectionContainer>
      <UserProfileContainer>
        <ProfilePicSection>
        <svg width="58" height="58">
        <circle fill="#E5E4E2" stroke="#ff9900" strokeWidth="2" cx="28" cy="28" r="28"></circle>  
          <mask id="svgMask">
            <circle fill="#ffffff" cx="27" cy="27" r="25"></circle>  
          </mask>
          <image xlinkHref={professional.profile_photo} mask="url(#svgMask)"
           height="100%"
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
                <p className='unuscolor-txt nameSection-profession'>{professional.credetials}</p>
              </li>
            </ul>
        </NameSection>
        <ProfileWsSection>
            <FaRegCompass className='duocolor-txt' style={{fontSize: '25px', margin: '0 10px'}} />
            <FaUserPlus style={{fontSize: '25px' , color: 'gray', margin: '0 10px'}}/>
        </ProfileWsSection>
      </UserProfileContainer>
    </SectionContainer>
    </>
  )
}

export default UserProfileSection