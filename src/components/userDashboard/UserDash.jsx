import React, { useState } from "react";
import "./dash.css";
import home from "../../assets/images/home.svg";
import user from "../../assets/images/user.png";
import send from "../../assets/images/send.svg";
import table from "../../assets/images/table.svg";
import eye from "../../assets/images/eye.png";
import edit from "../../assets/images/edit.svg";
import trash from "../../assets/images/trash.svg";
import message from "../../assets/images/message.svg";
import finalwhite from "../../assets/images/final.png";
import Content from "./Content";
import Nav from "./Nav";
import Profile from "./Profile";
import SubmitCase from "./SubmitCase";
import ProfileDetail from "./ProfileDetail";

const UserDash = () => {
  const [isSubmitCaseOpen, setIsSubmitCaseOpen] = useState(false);
  const [isProfileDetailOpen, setIsProfileDetailOpen] = useState(false);

  const toggleSubmitCase = () => {
    setIsSubmitCaseOpen(!isSubmitCaseOpen);
    setIsProfileDetailOpen(false); // Close the other modal if it's open
  };

  const toggleProfileDetail = () => {
    setIsProfileDetailOpen(!isProfileDetailOpen);
    setIsSubmitCaseOpen(false); // Close the other modal if it's open
  };

  return (
    <div>
      <div className="dashbord-section">
        <Nav onToggleSubmitCase={toggleSubmitCase} />
        <div className="dash-content">
          <Profile onToggleProfileDetail={toggleProfileDetail} />
          {isSubmitCaseOpen && (
            <SubmitCase onClose={toggleSubmitCase} />
          )}
          {isProfileDetailOpen && (
            <ProfileDetail onClose={toggleProfileDetail} />
          )}
          <div className="dash-cases">
            <Content />
          </div>
          {/* <div className="footer">Copy & write 100 Hills Solicitors</div> */}
        </div>
      </div>
    </div>
  );
};

export default UserDash;
