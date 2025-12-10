import React from "react";
import { Route, Routes } from "react-router-dom";
import StaffLoginPage from "../pages/staffpages/StaffLoginPage";

import TitleRegistrationPage from "../pages/Producers/TitleRegistrationPage";
import DashBoardPage from "../pages/staffpages/DashBoardPage";
import RegisterViewDetailsPage from "../pages/staffpages/RegisterViewDetailsPage";

import OMDashboard from "../pages/O&M/OMDashboard";
import OMRegistrationViewDetails from "../pages/O&M/OMRegistrationViewDetails";
import ProducerDashboard from "../pages/Producers/ProducerDashboard";
import ProducerRegistrationViewDetails from "../pages/Producers/ProducerRegistrationViewDetails";
import ECDashboard from "../pages/ECMember/ECDashboard";
import ECRegistrationViewDetails from "../pages/ECMember/ECRegistrationViewDetails";
import ProducerLoginPage from "../pages/Producers/ProducerLoginPage";
import RemarkedTitlePage from "../pages/staffpages/RemarkedTitlePage";
import OMRemarkedTitlePage from "../pages/O&M/OMRemarkedTitlePage";
import ECRemarkedTitlePage from "../pages/ECMember/ECRemarkedTitlePage";
import Membership from "../pages/User/Membership";
import UserLogin from "../pages/User/UserLogin";
import UsersAuth from "./Auth/UsersAuth";
import MembershipForm from "../components/User/MemberShipForm";

import LeaderDashboard from "../pages/O&MLeaderPage/LeaderDashboard";
import KFCCMemberList from "../pages/O&MLeaderPage/KFCCMemberList";
import PublicityClearance from "../pages/Producers/PublicityClearance";
import FilmReleaseForm from "../components/Producer/FilmReleaseForm";
import Filmrelesedetails from "../pages/Producers/Filmrelesedetails";

function CustomRouter() {
  return (
    <div>
      <Routes>

        {/* Staff */}
        <Route path="/" element={<StaffLoginPage />} />
        <Route path="/staffdashboard" element={<DashBoardPage />} />
        <Route
          path="/staffregistrationdetails"
          element={<RegisterViewDetailsPage />}
        />
        <Route path="/staffremarkedtitles" element={<RemarkedTitlePage />} />

        {/* O&M */}
        <Route path="/o&mdashboard" element={<OMDashboard />} />
        <Route path="/o&mregistrationdetails" element={<OMRegistrationViewDetails />} />
        <Route path="/o&mremarkedtitles" element={<OMRemarkedTitlePage />} />

        <Route path="/o&m/leaderdashboard" element={<LeaderDashboard />} />
        <Route path="/kfccmembers" element={<KFCCMemberList />} />

        {/* Producer */}
        <Route path="/producerlogin" element={<ProducerLoginPage />} />
        <Route path="/producerdashboard" element={<ProducerDashboard />} />
        <Route path="/producerregistrationdetails"element={<ProducerRegistrationViewDetails />} />
        <Route path="/titleregistration" element={<TitleRegistrationPage />} />

        <Route path="/publicityclearance" element={<PublicityClearance />} />
        <Route path="/applyhcategory" element={<Filmrelesedetails/>} />




        {/* RC Members */}
        <Route path="/ecdashboard" element={<ECDashboard />} />
        <Route
          path="/ecregistrationdetails"
          element={<ECRegistrationViewDetails />}
        />
        <Route path="/ecremarkedtitles" element={<ECRemarkedTitlePage />} />

        {/* User */}
        <Route path="/login" element={<UserLogin/>} />
        
        <Route path= "/user" element={<UsersAuth/>} > 
          <Route path="membership" element={<Membership />} />
          <Route path="membership/apply" element={<MembershipForm />} />
        </Route>


        
      </Routes>
    </div>
  );
}

export default CustomRouter;
