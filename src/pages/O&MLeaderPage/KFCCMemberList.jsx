import React from 'react'
import KFCCMembers from '../../components/O&MLeader/KFCCMembers'
import Nav from '../../components/O&MLeader/Nav'

function KFCCMemberList() {
  return (
    <div className='flex min-h-screen'>
        <Nav/>
        <div className='flex-1'><KFCCMembers/></div></div>
  )
}

export default KFCCMemberList