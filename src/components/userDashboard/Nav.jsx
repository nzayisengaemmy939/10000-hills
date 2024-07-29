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
const Nav = () => {
  return (
    <div className="dash-nav">
    <div>
      <img src={finalwhite} className="logo"></img>
    </div>
    <div>
      <img src={table} className="home"></img>

      <p>Dashboard</p>
    </div>
    <div>
      <img src={home} className="home"></img>
      <p>Home</p>
    </div>
    <div>
      <img src={send} className="home"></img>

      <p>Submit Case</p>
    </div>
    <div>
      <img src={message} className="home"></img>

      <p>Messages</p>
    </div>
  </div>
  )
}

export default Nav
