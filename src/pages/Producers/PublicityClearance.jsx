import React from 'react'
import Nav from '../../components/Producer/Nav'
import PublicityClearanceForm from '../../components/Producer/PublicityClearanceFrom'

function PublicityClearance() {
  return (
        <div className='flex h-screen'>
        <Nav/>
        <div className='flex-1 p-6  overflow-y-auto'> <PublicityClearanceForm/></div>
        
    </div>
  )
}

export default PublicityClearance