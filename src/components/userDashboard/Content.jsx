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

const Content = () => {
  return (
    <div className="cases-table">
    <h3>Added Cases</h3>
    <table>
      <tr>
        <th>Email</th>
        <th>Case Type</th>
        <th>Case Subtype</th>
        <th>Summary</th>
        <th>File</th>
        <th>Created At</th>
        <th>Actions</th>
      </tr>
      <tr>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td className="action">
          <img src={eye}></img>
          <img src={edit}></img>
          <img src={trash}></img>
        </td>
      </tr>
      <tr>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td>xa yo areggb v ojejejj</td>
        <td className="action">
          <img src={eye}></img>
          <img src={edit}></img>
          <img src={trash}></img>
        </td>
      </tr>
    </table>
    {/* <hr style={{width:"1100px",color:" hsla(225, 80%, 92%, 0.53)",marginTop:"10px"}}/> */}
  </div>
  )
}

export default Content
