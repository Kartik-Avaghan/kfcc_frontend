import React from 'react'
import DashBoard from '../../components/RCMembers/DashBoard'
import Nav from '../../components/RCMembers/Nav'

function RCDashboard() {
  return (
    <div className='flex '>
        <Nav/>
        <div className='flex-1 overflow-y-auto p-6'>
            <DashBoard/>
        </div>
    </div>
  )
}

export default RCDashboard