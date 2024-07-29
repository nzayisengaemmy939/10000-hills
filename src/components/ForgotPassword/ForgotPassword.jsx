import React from "react";
import finalWhite from "../../assets/images/finalwhite.png";
import eye from "../../assets/images/eye.png";
import user from "../../assets/images/user.png";
import '../Login/login.css'
import backgroundImage from '../../assets/images/bg.png'

const ForgotPassword = () => {
  return (
    <div>
      <div id="toastNotification" className="toast hidden"></div>
      <div
        className="login-container"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
      >
        <div className="wrapper-all">
          <div className="logo" style={{ marginBottom: "20px" }}>
            <div>
              <img
                src={finalWhite}
                alt="Logo"
                style={{ maxWidth: "150px", marginBottom: "10px" }}
              />
            </div>
            <div>
              <h1 style={{ margin: "10px 0" }}>1000 Hills SOLISTORS</h1>
              <h2 style={{ margin: "10px 0" }}>Building Bridges to Justice</h2>
            </div>
          
          </div>
          <div className="login-detail" style={{height:"200px"}}>
            <form id="login-form">
              <div
                className="input-field"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
               
                }}
              >
                <img
                  src={user}
                  alt="User Icon"
                  style={{ width: "30px", marginRight: "10px" }}
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="email"
                  style={{
                    padding: "10px",
                    width: "100%",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                  }}
                />
              </div>
              <div className="buttons">
                <button
                  className="submit-button"
                  type="button"
                  style={{
                    backgroundColor: "#021742",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
