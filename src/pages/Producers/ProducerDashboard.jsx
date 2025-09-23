import React from 'react'
import DashBoard from '../../components/Producer/Dashboard'

function ProducerDashboard() {
  return (
    <div className='flex h-screen'>
        <div className='flex-1 p-6 overflow-y-auto'> <DashBoard/></div>
        
    </div>
  )
}

export default ProducerDashboard