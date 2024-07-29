import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeNav from "./components/homenav/HomeNav.jsx";
import Welcome from "./components/welcome/welcome.jsx";
import AboutUs from "./components/aboutus/aboutus.jsx";
import AllTeam from "./components/team/team.jsx";
import Services from "./components/services/services.jsx";
import Footer from "./components/footer/footer.jsx";
import UserDash from "./components/userDashboard/UserDash.jsx";
import StaffDash from "./components/StaffAdmin/StaffDash.jsx";

export function App(){
  return (
    <Router>
      {/* <Header /> */}
      {/* <ToastContainer /> */}
      <main>
        <Routes>
          <Route path="/" element={<StaffDash />} />
          <Route path="/team" element={<Footer />} />

          
        </Routes>
      </main>
    </Router>
  )
}