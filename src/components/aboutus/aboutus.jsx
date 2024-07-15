import React from 'react';
import './aboutusstyles.scss'
import bluelogo from '../../assets/images/final.jpg'

const AboutUs = () => {
 

  return (
    <div className='about-section'>
<div className="about-us-section">
      <div className="about-us-main animated-element">
        <div className="heading">
          <h1>About Us</h1>
          <hr/>
        </div>
        <div className="about-us">
          
          <p><img src={bluelogo} alt="" />
              1000 Hills Solicitors focuses exclusively on civil, criminal cases
              and consultancy and our lawyers mainly represent clients with
              complex legal issues or high conflict cases. We are best known for
              being effective at reaching cases out of court while being equally
              effective at resolving disputes in court when the other side is
              being unreasonable.
            
            <h4>Founders</h4>
           
              1000 Hills Solicitors traces its roots to 2024, the founders,
              started practicing law and IT engineering in the different
              universities of Rwanda. As a young lawyer, he started as a general
              practitioner, taking on any case where he could help a client. His
              practice expanded through his dedication and attention to client
              service, and as a result, the foundation to Pace Law was
              established. His first foray was litigation and as the practice
              flourished, his business evolved.
           
            <h4>Our Story</h4>
            
              Earlier this year, when COVID-19 ushered in a new remote
              normal law firms around the country were quick to adjust to their
              new digital lifestyle. Now, as we approach our post-COVID-19
              future, many of these same law firms are embracing digital
              technology and have found themselves continuing to work remotely
              with the help of remote communication and collaboration tools. If
              your attorneys are looking to dive even deeper into all remote
              work has to offer, here are the top remote tools that will allow
              your law firm to reach your full remote potential. Established in
              2024, 1000 Hills Solicitors has dedicated itself to its goal of
              effecting positive changes in clients’ lives by representing them
              effectively in navigating the legal process, while also redefining
              the client experience.
            </p>
          {/* <div className="about-us-left about-card">
            <p>
              1000 Hills Solicitors focuses exclusively on civil, criminal cases
              and consultancy and our lawyers mainly represent clients with
              complex legal issues or high conflict cases. We are best known for
              being effective at reaching cases out of court while being equally
              effective at resolving disputes in court when the other side is
              being unreasonable.
            </p>
            <h4>Founders</h4>
            <p>
              1000 Hills Solicitors traces its roots to 2024, the founders,
              started practicing law and IT engineering in the different
              universities of Rwanda. As a young lawyer, he started as a general
              practitioner, taking on any case where he could help a client. His
              practice expanded through his dedication and attention to client
              service, and as a result, the foundation to Pace Law was
              established. His first foray was litigation and as the practice
              flourished, his business evolved.
            </p>
          </div>
          
          <div className="about-us-right about-card">
            <h4>Our Story</h4>
            <p>
              Earlier this year, when COVID-19 ushered in a new remote
              normal law firms around the country were quick to adjust to their
              new digital lifestyle. Now, as we approach our post-COVID-19
              future, many of these same law firms are embracing digital
              technology and have found themselves continuing to work remotely
              with the help of remote communication and collaboration tools. If
              your attorneys are looking to dive even deeper into all remote
              work has to offer, here are the top remote tools that will allow
              your law firm to reach your full remote potential. Established in
              2024, 1000 Hills Solicitors has dedicated itself to its goal of
              effecting positive changes in clients’ lives by representing them
              effectively in navigating the legal process, while also redefining
              the client experience.
            </p>
          </div> */}
        </div>
      </div>
    </div>
     
    </div>
    
  );
};

export default AboutUs;
