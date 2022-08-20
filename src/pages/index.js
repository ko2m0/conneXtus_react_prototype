import React, { useEffect, useState } from 'react'
import BtnsSection from '../components/BtnsSection'
import Footer from '../components/Footer'
import SmSection from '../components/SmSection'
import TabsSection from '../components/TabsSection/index'
import UserProfileSection from '../components/UserProfileSection'
import VideoSection from '../components/VideoSection'
import '../App.css'

import TinderCard from "react-tinder-card";
import {
  AltModal,
  ModalContentContainer,
} from "../components/AltModals/AltModal";
import MeetingForm from "../components/Forms/MeetingForm";
import ReferralForm from '../components/Forms/ReferralForm';
import axios from 'axios'

const Home = () => {
  const [professionals, setProfessionals] = useState([]);
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [showReferralForm, setShowReferralForm] = useState(false);
  const [currentProfessional, setCurrentProfessional] = useState(false);

  const users = async() => {
    try {
      const res = await axios.get('http://localhost:8000/users')

      setProfessionals(res.data)  
    } catch (error) {
      console.log(error);
    }
  
    return users;
  }

  useEffect(() => {
    users()
  }, [])
  
  return (
    <>
      <div>
        <div className="cardContainer">
          {professionals.map((professional) => (
            <TinderCard
              className="swipe"
              key={professional.user_id}
              preventSwipe={["up", "down"]}
            >
              <div className="wrapper card">
                <VideoSection />
                <UserProfileSection professional={professional} />
                <BtnsSection
                  currentProfessional={professional}
                  setCurrentProfessional={setCurrentProfessional}
                  setShowMeetingForm={setShowMeetingForm}
                  setShowReferralForm={setShowReferralForm}
                  />
                <TabsSection
                  professional={professional}
                />
                <SmSection />
                <Footer />
              </div>
            </TinderCard>
          ))}
        </div>

        <AltModal
          show={showMeetingForm}
          setShow={setShowMeetingForm}
          modalTitle="Meeting"
        >
          <ModalContentContainer>
            <MeetingForm
              currentProfessional={currentProfessional}
              setShow={setShowMeetingForm}
            />
          </ModalContentContainer>
        </AltModal>

        <AltModal
          show={showReferralForm}
          setShow={setShowReferralForm}
          modalTitle="Referral"
        >
          <ModalContentContainer>
          <ReferralForm
            currentProfessional={currentProfessional}
            setShow={setShowReferralForm}
          />
          </ModalContentContainer>
        </AltModal>
      </div>
    </>
  );
};

export default Home;
