import React from 'react'
import Nav from '../../components/O&MLeader/Nav'
import Dashboard from '../../components/O&MLeader/Dashboard'

function LeaderDashboard() {
  return (
    <div className='flex min-h-screen'>
        <Nav/>
        <div className='flex-1'>   <Dashboard/></div>
      
        </div>
  )
}

export default LeaderDashboard