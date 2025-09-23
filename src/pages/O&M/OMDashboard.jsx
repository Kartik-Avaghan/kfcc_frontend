import React from 'react'
import DashBoard from '../../components/O&M/Dashboard'
import Nav from '../../components/O&M/Nav'

function OMDashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Nav />

      {/* Main Dashboard Content */}
      <div className="flex-1  p-6 overflow-y-auto">
        <DashBoard />
      </div>
    </div>
  )
}

export default OMDashboard