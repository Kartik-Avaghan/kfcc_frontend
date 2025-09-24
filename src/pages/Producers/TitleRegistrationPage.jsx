import React from 'react'
import TitleRegistration from '../../components/Producer/TitleRegistration'
import Nav from '../../components/Producer/Nav'

function TitleRegistrationPage() {
  return (
    <div className='flex h-screen'>
      <Nav/>
      <div className='flex-1 p-6 overflow-y-auto'> <TitleRegistration/></div>
      
    </div>
  )
}

export default TitleRegistrationPage