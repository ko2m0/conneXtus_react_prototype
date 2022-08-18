import React, {useState} from 'react';
import { SectionContainer, BtnsSectionContainer, Button } from './BtnsElements';
import msg_icon from '../../img/icons/msg_icon.svg';
import meet_icon from '../../img/icons/meet_icon.svg';
import refer_icon from '../../img/icons/refer_icon.svg';
import { AltModal, ModalContentContainer } from '../AltModals/AltModal';
import MeetingForm from '../Forms/MeetingForm';
import ReferralForm from '../Forms/ReferralForm';


function BtnsSection() {

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

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
        <Button onTouchEnd={() => setShowModal1(!showModal1)} onClick={() => setShowModal1(!showModal1)} >
          <img src={meet_icon} alt="Meeting" className='btns-btn_icon'/>
        </Button>
        <p className='unuscolor-txt txt-center txt-bold'>Meeting</p>
        </div>
        
        <div>
        <Button onTouchEnd={() => setShowModal2(!showModal2)} onClick={() => setShowModal2(!showModal2)}>
        <img src={refer_icon} alt="Message" className='btns-btn_icon'/>
        </Button>
        <p className='unuscolor-txt txt-center txt-bold'>Referral</p>
        </div>
        
      </BtnsSectionContainer>

      <AltModal
        show={showModal1}
        setShow={setShowModal1}
        modalTitle="Meeting"
      >
            <ModalContentContainer>
            <MeetingForm/>
            </ModalContentContainer>
      </AltModal>

      <AltModal
        show={showModal2}
        setShow={setShowModal2}
        modalTitle="Referral"
      >
            <ModalContentContainer>
            <ReferralForm/>
            </ModalContentContainer>
      </AltModal>
    </SectionContainer>
    </>
  )
}


export default BtnsSection