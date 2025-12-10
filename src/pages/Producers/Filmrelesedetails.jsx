import React from 'react'
import FilmReleaseForm from '../../components/Producer/FilmReleaseForm'
import Nav from '../../components/Producer/Nav'

function Filmrelesedetails() {
  return (
    <div className='flex h-screen'>
           <Nav/>
           <div className='flex-1 p-6  overflow-y-auto'> <FilmReleaseForm/></div>
           
       </div>
  )
}

export default Filmrelesedetails