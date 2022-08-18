import React, { useState } from 'react'
import BtnsSection from '../components/BtnsSection'
import Footer from '../components/Footer'
import SmSection from '../components/SmSection'
import TabsSection from '../components/TabsSection/index'
import UserProfileSection from '../components/UserProfileSection'
import VideoSection from '../components/VideoSection'
import '../App.css'

import TinderCard from "react-tinder-card";

const db = [
  {
    name: "Cosme Fulanito",
    credentials: "Professional Shark/ Billionaire",
    url: "https://http2.mlstatic.com/D_NQ_NP_760653-MLM43882836200_102020-O.jpg",
  },
  {
    name: "Lalo Landa",
    credentials: "Unknown profession/ Enthusiastic reader/ Quiet man",
    url: "https://pbs.twimg.com/profile_images/2430887577/Lalo_Landa_400x400.jpg",
  },
  {
    name: "Max Power",
    credentials: "Determined man, without commitment and bad gay",
    url: "http://k31.kn3.net/3FBE205FD.png",
  },
  {
    name: "Homero Jimeno",
    credentials: "Accountant",
    url: "https://pbs.twimg.com/media/E1NKoicXsAI8FAB.jpg",
  },
  {
    name: "Apu Nahasapeemapetilon",
    credentials: "CEO Kwik-E-Mart",
    url: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/12/09/5fa52e1c135b6.jpeg",
  },
  {
    name: "Homero Thomson",
    credentials: "Spy",
    url: "https://pbs.twimg.com/media/E8DgHZDXIAsK1q_.jpg",
  },
];

const Home = () => {
  const professionals = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    console.log(lastDirection);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <>
      <div>
        <div className="cardContainer">
          {professionals.map((professional) => (
            <TinderCard
              className="swipe"
              key={professional.name}
              onSwipe={(dir) => swiped(dir, professional.name)}
              onCardLeftScreen={() => outOfFrame(professional.name)}
            >
              <div className="wrapper card">
                <VideoSection />
                <UserProfileSection professional={professional} />
                <BtnsSection />
                <TabsSection />
                <SmSection />
                <Footer />
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
