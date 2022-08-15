import React, {useState} from 'react';
import { ModalMeeting } from '../Modals/ModalMeeting';
import { SectionContainer, BtnsSectionContainer, Button } from './BtnsElements';
import msg_icon from '../../img/icons/msg_icon.svg';
import meet_icon from '../../img/icons/meet_icon.svg';
import refer_icon from '../../img/icons/refer_icon.svg';
import { ModalReferral } from '../Modals/ModalReferral';


function BtnsSection() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
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
        <Button onClick={openModal}>
          <img src={meet_icon} alt="Meeting" className='btns-btn_icon'/>
        </Button>
        <p className='unuscolor-txt txt-center txt-bold'>Meeting</p>
        </div>
        <ModalMeeting showModal={showModal} setShowModal={setShowModal}/>
        <div>
        <Button onClick={openModal}>
        <img src={refer_icon} alt="Message" className='btns-btn_icon'/>
        </Button>
        <p className='unuscolor-txt txt-center txt-bold'>Referral</p>
        </div>
        <ModalReferral showModal={showModal} setShowModal={setShowModal} />
      </BtnsSectionContainer>
    </SectionContainer>
    </>
  )
}


export default BtnsSection