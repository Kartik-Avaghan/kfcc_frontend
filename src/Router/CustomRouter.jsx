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
import ECDashboard from '../pages/ECMember/ECDashboard'
import ECRegistrationViewDetails from '../pages/ECMember/ECRegistrationViewDetails'
import ProducerLoginPage from '../pages/Producers/ProducerLoginPage'
import RemarkedTitlePage from '../pages/staffpages/RemarkedTitlePage'
import OMRemarkedTitlePage from '../pages/O&M/OMRemarkedTitlePage'
import ECRemarkedTitlePage from '../pages/ECMember/ECRemarkedTitlePage'


function CustomRouter() {
  return (
    <div>
        <Routes>


          {/* Staff */}
            <Route path='/' element={<StaffLoginPage/>}/>
            <Route path='/staffdashboard' element={<DashBoardPage/>}/>
            <Route path='/staffregistrationdetails' element={<RegisterViewDetailsPage/>}/>
            <Route path='/remarkedtitles' element={<RemarkedTitlePage/>}/>


              


              {/* O&M */}
              <Route path='/o&mdashboard' element={<OMDashboard/>}/>
              <Route path='/o&mregistrationdetails' element={<OMRegistrationViewDetails/>}/>
              <Route path='/o&mremarkedtitles' element={<OMRemarkedTitlePage/>}/>

              

              {/* Producer */}
              <Route path='/producerlogin' element={<ProducerLoginPage/>}/>
              <Route path='/producerdashboard' element={<ProducerDashboard/>}/>
              <Route path='/producerregistrationdetails' element={<ProducerRegistrationViewDetails/>}/>
              <Route path='/titleregistration' element={<TitleRegistrationPage/>}/>






              {/* RC Members */}
              <Route path='/ecdashboard' element={<ECDashboard/>}/>
              <Route path='/ecregistrationdetails' element={<ECRegistrationViewDetails/>}/>
              <Route path='/ecremarkedtitles' element={<ECRemarkedTitlePage/>}/>



        </Routes>
    </div>
  )
}

export default CustomRouter