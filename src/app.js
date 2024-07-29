import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeNav from "./components/homenav/HomeNav.jsx";
import Welcome from "./components/welcome/welcome.jsx";
import AboutUs from "./components/aboutus/aboutus.jsx";
import AllTeam from "./components/team/team.jsx";
import Services from "./components/services/services.jsx";
import Footer from "./components/footer/footer.jsx";
// import UserDash from "./components/userDashboard/UserDash.jsx";
// import StaffDash from "./components/StaffAdmin/StaffDash.jsx";
// import EmailTemplate from "./components/Emailtemperate/EmailTemperate.jsx";
import EmailSent from "./components/EmailSent/EmailSent.jsx";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import EmailTemplate from "./components/Emailtemperate/EmailTemperate.jsx";
import Verify from "./components/verify/Verify.jsx";
import SingleCase from "./components/SingleCase/SingleCase.jsx";

export function App(){
 
  return (
    <Router>
      {/* <Header /> */}
      {/* <ToastContainer /> */}
      <main>
   
        <Routes>


          <Route path="/" element={<Welcome />} />
          <Route path="/team" element={<Footer />} />

          
        </Routes>
      </main>
    </Router>
  )
}