import React from 'react'
import DashBoard from '../../components/ECMembers/DashBoard'
import Nav from '../../components/ECMembers/Nav'

function RCDashboard() {
  return (
    <div className='flex h-screen'>
        <Nav/>
        <div className='flex-1 overflow-y-auto p-6'>
            <DashBoard/>
        </div>
    </div>
  )
}

export default RCDashboard