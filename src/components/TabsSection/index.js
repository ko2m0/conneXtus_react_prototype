import React from 'react'
import { SectionContainer } from './TabsElements'
import TabsNu from './TabsNu'

const TabSection = ({ professional }) => {
  return (
    <>
    <SectionContainer>
        <TabsNu professional={professional} />
    </SectionContainer>
    </>
  )
}

export default TabSection