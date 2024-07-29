import React from "react";
import "./dash.css";
// import u from '../../assets/images/icons/home.svg'
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

const UserDash= () => {
  return (
    <div>
      <div className="dashbord-section">
     <Nav></Nav>
        <div className="dash-content">
         <Profile></Profile>

          <div className="dash-cases">
          <Content></Content>
          </div>
          {/* <div className="footer">Copy & write 100 Hills Solistors</div> */}
        </div>
      </div>
    </div>
  );
};

export default UserDash;
