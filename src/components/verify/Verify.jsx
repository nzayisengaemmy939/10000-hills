import React from "react";
import finalwhite from "../../assets/images/finalwhite.png";
import idverify from "../../assets/images/idverify.png";
import "./verify.css";
import backGroundImage from "../../assets/images/bg.png";

const Verify = () => {
  return (
    <div>
      <div
        className="signup-container"
        style={{
          backgroundImage: `url(${backGroundImage})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#00171F",
        }}
      >
        <input
          type="text"
          id="token"
          style={{ width: "80%", height: "70px", display: "none" }}
        />
        <div className="wrapper-all">
          <div className="logo" style={{ marginBottom: "20px" }}>
            <img
              src={finalwhite}
              alt="Logo"
              style={{ maxWidth: "200px", marginBottom: "10px" }}
            />
            <div>
              <h1 style={{ margin: "10px 0" }}>1000 Hills SOLISTORS</h1>
              <h2 style={{ margin: "10px 0" }}>Building Bridges to Justice</h2>
            </div>
          </div>

          <div
            className="signup-detail"
            style={{
              height: "60vh",
              width: "60%",
              textAlign: "center",
              color: "#00171f",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-20px",
              backgroundColor: "#edf1fd",
            }}
          >
            <h2>Account Verified!</h2>
            <img
              src={idverify}
              alt="ID Verified"
              style={{ width: "200px",marginTop:"20px"}}
            />

            <p style={{marginTop:"10px"}}>
              Thank you for verifying your account, your account is now active.
            </p>
            <p style={{marginTop:"10px"}}>Please use the link below to login to your account:</p>
            <a href="login.html">
              <button
                style={{
                  height: "50px",
                  backgroundColor: "#021742",
                  color: "white",
                  border: "none",
                  padding: "0 20px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  marginTop:"20px"
                }}
              >
                Login To Your Account
              </button>
            </a>

            <p style={{marginTop:"10px"}}>Thank you for choosing 1000 Hills Solicitors.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
