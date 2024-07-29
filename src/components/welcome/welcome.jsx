import React from 'react';
// import HomeNav from './components/homenav/HomeNav.jsx';
import HomeNav from '../homenav/HomeNav.jsx';
import './welcomestyles.scss';
import '../chardipslay/chardisplay.scss';
import Dash from '../userDashboard/UserDash.jsx'

import downimg from '../../assets/images/down.png'
import Slideshow from '../himeslider/homeslides.jsx';
import CharacterDisplay from '../chardipslay/CharacterDisplay.jsx';
import AboutUs from '../aboutus/aboutus.jsx';
import AllTeam from '../team/team.jsx';
import Services from '../services/services.jsx';
import Footer from '../footer/footer.jsx';
import Staff from '../Staff/Staff.jsx';
// import DashPage from '../userDashboard/UserDash.jsx'
// import Login from '../Login/loginComponent.jsx'
// import Signup from '../signup/SignupComponent.jsx';

const texts = [
  "Welcome to our website. We provide the best services.",
  "Contact us for more information.",
  "Explore our range of products."
];
const Welcome = () => {
  const bgImage = require('../../assets/images/bg.png').default;

  return (
    <div>
      <div 
      className="welcome-div" 
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='homenav-component'>
        <HomeNav />
      </div>
      
      {/* <hr /> */}
      <div className='chardisplay'>
        <CharacterDisplay />
      </div>
      <Slideshow />
      <div className='home-buttons'>
        <button>
          submit Case
        </button>
        <button>
          consultance
        </button>
        <button>
          Internership
        </button>
      </div>
    </div>
    {/* <div className='downimg'>
      <img src={downimg} alt=""downimg />
    </div> */}
    <AboutUs />
    <Staff></Staff>
    
    <Services />
    < AllTeam/>

    < Footer />
   {/* <DashPage></DashPage> */}
    {/* <Login></Login> */}
    {/* <Signup></Signup> */}
    </div>
    
  );
};

export default Welcome;
