import React from 'react'
import DashBoard from '../../components/Producer/Dashboard'
import Nav from '../../components/Producer/Nav'

function ProducerDashboard() {
  return (
    <div className='flex h-screen'>
        <Nav/>
        <div className='flex-1 p-6  overflow-y-auto'> <DashBoard/></div>
        
    </div>
  )
}

export default ProducerDashboard