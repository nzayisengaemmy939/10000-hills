import React, { useState } from 'react';
import Nav from '../userDashboard/Nav';
import Profile from '../userDashboard/Profile';
import Content from '../userDashboard/Content';
import ProfileDetail from '../userDashboard/ProfileDetail';
import home from "../../assets/images/home.svg";
import user from "../../assets/images/user.png";
import send from "../../assets/images/inbox.svg";
import table from "../../assets/images/table.svg";
import eye from "../../assets/images/eye.png";
import edit from "../../assets/images/edit.svg";
import trash from "../../assets/images/trash.svg";
import message from "../../assets/images/message.svg";
import finalwhite from "../../assets/images/final.png";
import SubmitCase from '../userDashboard/SubmitCase'; // Assuming this is the correct path

const StaffDash = () => {
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
      <div>
        <img src={send} className="home" alt="Submit Case" />
        <p>All submited cases</p>
      </div>
      <div>
        <img src={message} className="home" alt="Messages" />
        <p>Messages</p>
      </div>
    </div>
        <div className="dash-content">
          <Profile onToggleProfileDetail={toggleProfileDetail} />
          {isSubmitCaseOpen && <SubmitCase onClose={toggleSubmitCase} />}
          {isProfileDetailOpen && <ProfileDetail onClose={toggleProfileDetail} />}
          <div className="dash-cases">
          <div className="cases-table">
    <h3>Added Cases</h3>
    <table>
      <tr>
        <th>Email</th>
        <th>Case Type</th>
        <th>Case Subtype</th>
        <th>Summary</th>
        <th>File</th>
        {/* <th>Created At</th> */}
        <th>Schedule</th>
      </tr>
      <tr>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        {/* <td className="action">
          <img src={eye}></img>
          <img src={edit}></img>
          <img src={trash}></img>
        </td> */}
      </tr>
      <tr>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        {/* <td className="action">
          <img src={eye}></img>
          <img src={edit}></img>
          <img src={trash}></img>
        </td> */}
      </tr>
    </table>
    {/* <hr style={{width:"1100px",color:" hsla(225, 80%, 92%, 0.53)",marginTop:"10px"}}/> */}
  </div>
          </div>
          {/* <div className="footer">Copy & write 100 Hills Solicitors</div> */}
        </div>
      </div>
    </div>
  );
};

export default StaffDash;
