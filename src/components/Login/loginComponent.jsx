import React, { useEffect, useRef } from 'react';
import './login.css';
import backGroundImage from '../../assets/images/bg.png';

import finalwhite from '../../assets/images/finalwhite.png';
import eye from '../../assets/images/eye.png';
import lock from '../../assets/images/lock.png';
import user from '../../assets/images/user.png';

const LoginComponent = () => {
  const showPassRef = useRef(null);
  const passRef = useRef(null);

  useEffect(() => {
    const showPass = showPassRef.current;
    const pass = passRef.current;

    const togglePasswordVisibility = () => {
      if (pass.type === "password") {
        pass.type = "text";
      } else {
        pass.type = "password";
      }
    };

    showPass.addEventListener("click", togglePasswordVisibility);
    
    // Cleanup the event listener on component unmount
    return () => {
      showPass.removeEventListener("click", togglePasswordVisibility);
    };
  }, []);

  return (
    <div 
      className='login-container' 
      style={{
        backgroundImage: `url(${backGroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="wrapper-all">
        <div className="logo">
          <div><img src={finalwhite} alt="Logo" /></div>
          <div>
            <h1>1000 Hills SOLICITORS</h1>
            <h2>Building Bridges to Justice</h2>
          </div>
          <hr />
        </div>
        <div className="login-detail">
          <form id="login-form">
            <div className="input-field">
              <img src={user} alt="User" />
              <input type="text" placeholder="Email" name="email" className="email" />
            </div>
            <div className="input-field">
              <img src={lock} alt="Lock" />
              <input type="password" placeholder="Password" className="pass" name="password" ref={passRef} />
              <img src={eye} alt="Show Password" className="show-pass" ref={showPassRef} />
            </div>
            <div className="buttons">
              <button className="submit-button" type="submit">Login</button>
              <button className="submit-button">
                <a href="signup.html">Register</a>
              </button>
            </div>
            <p><a href="forgetPassword.html">Forgot Password</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
