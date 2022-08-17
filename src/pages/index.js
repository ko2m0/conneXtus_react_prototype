import React from 'react'
import BtnsSection from '../components/BtnsSection'
import Footer from '../components/Footer'
import SmSection from '../components/SmSection'
import TabsSection from '../components/TabsSection/index'
import UserProfileSection from '../components/UserProfileSection'
import VideoSection from '../components/VideoSection'
import '../App.css'


const Home = () => {
  return (
    <>
    <div className='wrapper'>
    <VideoSection/>
    <UserProfileSection/>
    <BtnsSection/>
    <TabsSection/>
    <SmSection/>
    <Footer/>
    </div>
    </>
  )
}

export default Home