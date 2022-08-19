import React from 'react';
import { SectionContainer, BtnsSectionContainer, Button } from './BtnsElements';
import msg_icon from '../../img/icons/msg_icon.svg';
import meet_icon from '../../img/icons/meet_icon.svg';
import refer_icon from '../../img/icons/refer_icon.svg';

function BtnsSection({currentProfessional, setCurrentProfessional, setShowMeetingForm, setShowReferralForm}) {

  const handleMeeting = () => {
    setCurrentProfessional(currentProfessional)
    setShowMeetingForm(true)
  }

  const handleReferral = () => {
    setCurrentProfessional(currentProfessional)
    setShowReferralForm(true)
  }
  
  return (
    <>
    <SectionContainer>
      <BtnsSectionContainer>
        <div>
        <Button>
        <img src={msg_icon} alt="Message" className='btns-btn_icon'/>
        </Button>
        <p className='unuscolor-txt txt-center txt-bold'>Message</p>
        </div>
        <div>
        <Button onTouchEnd={handleMeeting} onClick={handleMeeting} >
          <img src={meet_icon} alt="Meeting" className='btns-btn_icon'/>
        </Button>
        <p className='unuscolor-txt txt-center txt-bold'>Meeting</p>
        </div>
        
        <div>
        <Button onTouchEnd={handleReferral} onClick={handleReferral}>
        <img src={refer_icon} alt="Message" className='btns-btn_icon'/>
        </Button>
        <p className='unuscolor-txt txt-center txt-bold'>Referral</p>
        </div>
        
      </BtnsSectionContainer>
    </SectionContainer>
    </>
  )
}


export default BtnsSection