import React from 'react';
import { SectionContainer, TabsContainer  } from './TabsElements';
import { Tabs } from './Tabs';
import '../../App.css'; 

const TabsSection = () => {
  return (
    <>
    <SectionContainer>
      <TabsContainer>
      /* TABS HERE */
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
        /* TABS HERE */
      </TabsContainer>
    </SectionContainer>
    </>
  )
}

export default TabsSection;