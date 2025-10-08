import React from 'react'
import MemberShipForm from '../../components/User/MemberShipForm'
import Nav from '../../components/User/Nav'

function MembershipFormPage() {
  return (
    <div className='flex h-screen'>
        <Nav/>
        <div className='flex-1 overflow-y-auto'>
          <MemberShipForm/>
        </div>
    </div>
  )
}

export default MembershipFormPage