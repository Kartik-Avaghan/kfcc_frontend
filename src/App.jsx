import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import CustomRouter from './Router/CustomRouter'
import Navbar from './components/Navbar'

function App() {
 

  return (
  <div>
    <BrowserRouter>
    <div className='h-[100vh]'>
      {/* <Navbar/> */}
    <CustomRouter/>
    </div>
    
    </BrowserRouter>
  </div>
  )
}

export default App
