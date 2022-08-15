import React, {useState} from 'react';
import { ModalMeeting } from '../Modals/ModalMeeting';
import { SectionContainer, BtnsSectionContainer, Button } from './BtnsElements';

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
        <Button>1</Button>
        <p className='unuscolor-txt txt-center txt-bold'>Message</p>
        </div>
        <div>
        <Button onClick={openModal}>2</Button>
        <p className='unuscolor-txt txt-center txt-bold'>Meeting</p>
        </div>
        <ModalMeeting showModal={showModal} setShowModal={setShowModal}/>
        <div>
        <Button>3</Button>
        <p className='unuscolor-txt txt-center txt-bold'>Referral</p>
        </div>
      </BtnsSectionContainer>
    </SectionContainer>
    </>
  )
}


export default BtnsSection