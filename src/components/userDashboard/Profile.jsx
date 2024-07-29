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

const Profile= () => {
  return (
    <div className="profile-container">
            <div className="profile">
              <p>NZAYISENGA</p>
              <img src={user}></img>
            </div>
          </div>
  )
}

export default Profile