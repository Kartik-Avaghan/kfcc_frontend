import React from 'react'
import RemarkedTitle from '../../components/O&M/RemarkedTitle'
import Nav from '../../components/O&M/Nav'

function OMRemarkedTitlePage() {
  return (
    <div className='flex h-screen'>
      <Nav/>
      <div className='flex-1 overflow-y-auto p-6' >
        <RemarkedTitle/></div>
    </div>
  )
}

export default OMRemarkedTitlePage