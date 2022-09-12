import React, { useEffect, useState } from 'react'
import { useParams  } from 'react-router-dom'
import BtnsSection from '../components/BtnsSection'
import Footer from '../components/Footer'
import SmSection from '../components/SmSection'
import TabsSection from '../components/TabsSection/index'
import UserProfileSection from '../components/UserProfileSection'
import VideoSection2 from '../components/VideoSection2'
import '../App.css'

import TinderCard from "react-tinder-card";
import {
  AltModal,
  ModalContentContainer,
} from "../components/AltModals/AltModal";
import MeetingForm from "../components/Forms/MeetingForm";
import ReferralForm from '../components/Forms/ReferralForm';
import axios from 'axios'
import { FormAlert } from '../components/Forms/FormElements'

// require('dotenv').config()
const API = 'https://connextus-webservice.onrender.com'
// const API = process.env.API_URI

const Home = () => {
  const [professionals, setProfessionals] = useState([]);
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [showReferralForm, setShowReferralForm] = useState(false);
  const [currentProfessional, setCurrentProfessional] = useState(false);
  const [showAllClients, setShowAllClients] = useState(false)
  const {userName} = useParams()

  const users = async() => {
    try {
      const res = await axios.get(API + '/users')

      setProfessionals(res.data)  
    } catch (error) {
      console.log(error);
    }
  
    return users;
  }

  const getProfile = async(userName) => {
    const res = await axios.get(API + "/user/" + userName)
    console.log(res)
    console.log(res.data)
    setProfessionals([{...res.data.user}])
  }

  const getUser = (userName) => {
    if(userName) {
      getProfile(userName)
    }else{
      users()
    }
  }

  useEffect(() => {
    getUser(userName)
  }, [])
  
  return (
    <>
      <div>
        {!professionals.length && <div className='loading'>Please wait...</div>}
        <div className="cardContainer">
          {professionals.map((professional) => (
            <TinderCard
              className="swipe"
              key={professional.user_id}
              preventSwipe={["up", "down"]}
            >
              <div className="wrapper card">
                <VideoSection2 />
                <UserProfileSection professional={professional} />
                <BtnsSection
                  currentProfessional={professional}
                  setCurrentProfessional={setCurrentProfessional}
                  setShowMeetingForm={setShowMeetingForm}
                  setShowReferralForm={setShowReferralForm}
                  />
                <TabsSection
                  professional={professional}
                  setCurrentProfessional={setCurrentProfessional}
                  setShowAllClients={setShowAllClients}
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

        <AltModal
          show={showAllClients}
          setShow={setShowAllClients}
          modalTitle="All Clients"
        >
          <ModalContentContainer>
          <FormAlert className='alert-all-clients'>
            <div className='all-clients-container'>
              {
                currentProfessional && currentProfessional.clients.length && currentProfessional.clients.map((client, index) => (
                  <img key={client.name + "-" + index} src={client.img} alt={client.name}/>
                ))
              }
            </div>
          </FormAlert>
          </ModalContentContainer>
        </AltModal>
      </div>
    </>
  );
};

export default Home;
