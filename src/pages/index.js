import React from 'react'
import BtnsSection from '../components/BtnsSection'
import Footer from '../components/Footer'
import SmSection from '../components/SmSection'
import TabsSection from '../components/TabsSection'
import UserProfileSection from '../components/UserProfileSection'
import VideoSection from '../components/VideoSection'

const Home = () => {
  return (
    <>
    <VideoSection/>
    <UserProfileSection/>
    <BtnsSection/>
    <TabsSection/>
    <SmSection/>
    <Footer/>
    </>
  )
}

export default Home