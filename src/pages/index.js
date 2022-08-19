import React, { useState } from 'react'
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

const db = [
  {
    user_id: "ramdom_user_id_3",
    name: "Cosme Fulanito",
    credentials: "Professional Shark/ Billionaire",
    url: "https://http2.mlstatic.com/D_NQ_NP_760653-MLM43882836200_102020-O.jpg",
  },
  {
    user_id: "ramdom_user_id_2",
    name: "Lalo Landa",
    credentials: "Unknown profession/ Enthusiastic reader/ Quiet man",
    url: "https://pbs.twimg.com/profile_images/2430887577/Lalo_Landa_400x400.jpg",
  },
  {
    user_id: "ramdom_user_id_1",
    name: "Max Power",
    credentials: "Determined man, without commitment and bad gay",
    url: "http://k31.kn3.net/3FBE205FD.png",
  },
  {
    user_id: "ramdom_user_id_4",
    name: "Homero Jimeno",
    credentials: "Accountant",
    url: "https://pbs.twimg.com/media/E1NKoicXsAI8FAB.jpg",
  },
  {
    user_id: "ramdom_user_id_4",
    name: "Apu Nahasapeemapetilon",
    credentials: "CEO Kwik-E-Mart",
    url: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/12/09/5fa52e1c135b6.jpeg",
  },
  {
    user_id: "ramdom_user_id_5",
    name: "Homero Thomson",
    credentials: "Spy",
    url: "https://pbs.twimg.com/media/E8DgHZDXIAsK1q_.jpg",
  },
];

const Home = () => {
  const professionals = db;
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [showReferralForm, setShowReferralForm] = useState(false);
  const [currentProfessional, setCurrentProfessional] = useState(false);

  return (
    <>
      <div>
        <div className="cardContainer">
          {professionals.map((professional) => (
            <TinderCard
              className="swipe"
              key={professional.name}
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
                <TabsSection />
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
