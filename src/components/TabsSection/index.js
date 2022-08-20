import React from 'react'
import { SectionContainer } from './TabsElements'
import TabsNu from './TabsNu'

const TabSection = ({ professional, setShowAllClients, setCurrentProfessional }) => {
  return (
    <>
    <SectionContainer>
        <TabsNu
          professional={professional}
          setShowAllClients={setShowAllClients}
          setCurrentProfessional={setCurrentProfessional}
          />
    </SectionContainer>
    </>
  )
}

export default TabSection