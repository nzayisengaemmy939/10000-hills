import React from "react";
import "./email.css";
import finalWhite from "../../assets/images/finalwhite.png";
import backGroundImage from "../../assets/images/bg.png"
const EmailSent = () => {
  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${backGroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="wrapper-all">
        <div className="logo" style={{ marginBottom: "20px" }}>
          <img
            src={finalWhite}
            alt="Logo"
            style={{ maxWidth: "150px", marginBottom: "10px" }}
          />
          <div>
            <h1 style={{ margin: "10px 0" }}>1000 Hills SOLISTORS</h1>
            <h2 style={{ margin: "10px 0" }}>Building Bridges to Justice</h2>
          </div>
        </div>
        <div style={{ color: "white", marginBottom: "20px",fontSize:"20px",width:"60%",margin:"auto"}}>
          Almost done! Your account has been created, but in order to proceed,
          please check your email and click the link inside to confirm your
          account.
        </div>
        <div>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios-filled/50/FAB005/feedback.png"
            alt="feedback"
            style={{ marginRight: "10px" }}
          />
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/FAB005/message-link.png"
            alt="message-link"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
