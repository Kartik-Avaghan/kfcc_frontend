import React from 'react'
import DashBoard from '../../components/staff/DashBoard'
import Nav from '../../components/staff/Nav'

function DashBoardPage() {
  return (
    <div className='flex h-screen'>

      <Nav/>
      <div className='flex-1 p-6 overflow-y-auto'><DashBoard/></div>
        
    </div>
  )
}

export default DashBoardPage