import React from 'react';
import './footer.scss'
// import bluelogo from '../../assets/images//final.jpg'

const Footer = () => {
  const bgImage = require('../../assets/images/bg.png').default;
   return (
    <div className='footer-section' style={{ 
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className='footer-heading'>
        <h1>Let's Keep In Touch</h1>
        <hr />
      </div>
      <div className="footer-body">
      <div className="contact-details">
      <div className="contact-details-contact">
        <div className="contact-details-message1">
          <h2>OUR LINKS</h2>
          <a href="#about-us-section" className="live">Home</a>
          <a href="contacts.html">Contacts</a>
          <a href="home.html">Submit Case</a>
          <a href="services.html">Service</a>
          <a href="consultances.html">Consultance</a>
          <a href="internaships.html">Internaships</a>
        </div>
        <div className="hr">
          <hr style={{ height: '80px' }} />
          <hr style={{ height: '170px' }} />
          <hr style={{ height: '80px' }} />
        </div>
        <div className="address">
          <img src="../../assets/images/icons/address.png" alt="" />
          <h3 style={{ marginBottom: '10px' }}>ADDRESS</h3>
          <p>Kigali, Rwanda</p>
        </div>
        <div className="hr">
          <hr style={{ height: '80px' }} />
          <hr style={{ height: '170px' }} />
          <hr style={{ height: '80px' }} />
        </div>
        <div className="email">
          <img src="../../assets/images/icons/email.png" alt="" />
          <h3 style={{ marginBottom: '10px' }}>EMAIL</h3>
          <p>hillssolicitors1000@gmail.com</p>
        </div>
        <div className="hr">
          <hr style={{ height: '80px' }} />
          <hr style={{ height: '170px' }} />
          <hr style={{ height: '80px' }} />
        </div>
        <div className="phone">
          <img src="../../assets/images/icons/phone.png" alt="" />
          <h3 style={{ marginBottom: '10px' }}>PHONE</h3>
          <p>
            <span style={{ marginRight: '10px' }}>Software engineer:</span><br />
            0787299001/0729981083
          </p>
          <p>
            <span style={{ marginRight: '10px' }}>Software engineer:</span><br />
            0787299001/0729981083
          </p>
          <p>
            <span style={{ marginRight: '10px' }}>Software engineer:</span><br />
            0787299001/0729981083
          </p>
          <p>
            <span style={{ marginRight: '10px' }}>Software engineer:</span><br />
            0787299001/0729981083
          </p>
        </div>
      </div>
    </div>
      </div>
      <div className='media'>
      <h3>FOLLOW US</h3>
      <img  src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
      <img  src="https://img.icons8.com/ios-filled/50/twitterx--v2.png" alt="twitterx--v2"/>
      <img  src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
      <img  src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
      </div>
      <footer>
        <h3>Copyright ©2024 1000 Hills Solicitors</h3>
      </footer>
    </div>
    
  );
};

export default Footer;
