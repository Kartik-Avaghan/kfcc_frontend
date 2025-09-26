import React from 'react'
import RemarkedTitle from '../../components/ECMembers/RemarkedTitle'
import Nav from '../../components/ECMembers/Nav'

function ECRemarkedTitlePage() {
  return (
    <div className='flex h-screen'>
        <Nav/>
        <div className='flex-1 overflow-y-auto p-6'>
            <RemarkedTitle
            />
        </div>
    </div>
  )
}

export default ECRemarkedTitlePage