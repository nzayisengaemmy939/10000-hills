import React from "react";
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

const Nav = ({ onToggleSubmitCase }) => {
  return (
    <div className="dash-nav">
      <div>
        <img src={finalwhite} className="logo" alt="Logo" />
      </div>
      <div>
        <img src={table} className="home" alt="Dashboard" />
        <p>Dashboard</p>
      </div>
      <div>
        <img src={home} className="home" alt="Home" />
        <p>Home</p>
      </div>
      <div onClick={onToggleSubmitCase}>
        <img src={send} className="home" alt="Submit Case" />
        <p>Submit Case</p>
      </div>
      <div>
        <img src={message} className="home" alt="Messages" />
        <p>Messages</p>
      </div>
    </div>
  );
};

export default Nav;
