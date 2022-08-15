import React from 'react'
import '../../App.css';
import { ProfileWsSection, NameSection, ProfilePicSection, SectionContainer, UserProfileContainer } from './UserElements'
import { FaRegCompass, FaUserPlus } from 'react-icons/fa'


const UserProfileSection = () => {
  return (
    <>
    <SectionContainer>
      <UserProfileContainer>
        <ProfilePicSection>
        <svg width="52" height="52">
          <circle fill="#ffffff" stroke="#ff9900" stroke-width="1" cx="25" cy="25" r="25"></circle>  
        </svg>
        </ProfilePicSection>
        <NameSection>
            <ul className='nameSection-ul'>
              <li className='nameSection-li'>
                <p className='unuscolor-txt'>Mark Cuban</p>
              </li>
              <li>
                <p className='unuscolor-txt'>Proffesional Shark/ Billionaire</p>
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