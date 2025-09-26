import React from 'react'
import RemarkedTitle from '../../components/staff/RemarkedTitle'
import Nav from '../../components/staff/Nav'

function RemarkedTitlePage() {
  return (
    <div className='flex h-screen'>
        <Nav/>
        <div className='flex-1 overflow-y-auto p-6' >
            <RemarkedTitle/>
        </div>
    </div>
  )
}

export default RemarkedTitlePage