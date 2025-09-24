import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StaffLoginPage from '../pages/staffpages/StaffLoginPage'

import TitleRegistrationPage from '../pages/Producers/TitleRegistrationPage'
import DashBoardPage from '../pages/staffpages/DashBoardPage'
import RegisterViewDetailsPage from '../pages/staffpages/RegisterViewDetailsPage'


import OMDashboard from '../pages/O&M/OMDashboard'
import OMRegistrationViewDetails from '../pages/O&M/OMRegistrationViewDetails'
import ProducerDashboard from '../pages/Producers/ProducerDashboard'
import ProducerRegistrationViewDetails from '../pages/Producers/ProducerRegistrationViewDetails'
import RCDashboard from '../pages/RCMember/RCDashboard'
import RCRegistrationViewDetails from '../pages/RCMember/RCRegistrationViewDetails'
import ProducerLoginPage from '../pages/Producers/ProducerLoginPage'


function CustomRouter() {
  return (
    <div>
        <Routes>


          {/* Staff */}
            <Route path='/' element={<StaffLoginPage/>}/>
            <Route path='/staffdashboard' element={<DashBoardPage/>}/>
            <Route path='/staffregistrationdetails' element={<RegisterViewDetailsPage/>}/>


              


              {/* O&M */}
              <Route path='/o&mdashboard' element={<OMDashboard/>}/>
              <Route path='/o&mregistrationdetails' element={<OMRegistrationViewDetails/>}/>

              

              {/* Producer */}
              <Route path='/producerlogin' element={<ProducerLoginPage/>}/>
              <Route path='/producerdashboard' element={<ProducerDashboard/>}/>
              <Route path='/producerregistrationdetails' element={<ProducerRegistrationViewDetails/>}/>
              <Route path='/titleregistration' element={<TitleRegistrationPage/>}/>





              {/* RC Members */}
              <Route path='/ecdashboard' element={<RCDashboard/>}/>
              <Route path='/ecregistrationdetails' element={<RCRegistrationViewDetails/>}/>

        </Routes>
    </div>
  )
}

export default CustomRouter