import React, { useState } from 'react';
import './homenavstyles.scss'
import logo from '../../assets/images/finalwhite.png'

function HomeNav(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const bgImage = require('../../assets/images/bg.png').default;
  return(
    <div style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        
        backgroundRepeat: 'no-repeat',
        backgroundColor:'#00171F',
      }}>
      <nav className="home-nav" >
    <div className="nav-logo">
      <img src={logo} alt="" />
    </div>
    <div className={`nav-links ${isOpen ? 'open' : ''}`}>
      <a href="#home">Home</a>
      <a href="#about">SubmitCase</a>
      <a href="#services">Consultance</a>
      <a href="#contact">Internership</a>
      <a href="#contact">Contacts</a>

    </div>
    <div className="nav-toggle" onClick={toggleMenu}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  </nav>
  <hr />
    </div>
    
  )

}

export default HomeNav;