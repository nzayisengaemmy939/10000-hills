import React from "react";
import user from "../../assets/images/user.png";
import "./dash.css";

const Profile = ({ onToggleProfileDetail }) => {
  return (
    <div className="profile-container">
      <div className="profile" onClick={onToggleProfileDetail}>
        <p>NZAYISENGA</p>
        <img src={user} alt="User" />
      </div>
    </div>
  );
};

export default Profile;
