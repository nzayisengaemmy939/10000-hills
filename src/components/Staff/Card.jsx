import React from "react";
import image from "../../assets/images/yves.png";
import './Staff.scss'; // Make sure to create and import this CSS file

const Card = () => {
  return (
    <div className="staff-cards">
      <div className="heading">
        <center>
          <h1>Staff</h1>
        </center>
        <hr style={{backgroundColor:"#021742"}}/>
      </div>
      <div className="staf-card">
        <div className="content">
          <blockquote>
            Nzayisenga is a dedicated Full Stack Developer proficient in both
            front-end and back-end technologies. With a solid foundation in
            HTML, CSS, JavaScript, React.js, Node.js, and Express.js, Nzayisenga
            creates robust and user-friendly web applications. Holding a
            Bachelor's Degree in Computer Science, Nzayisenga combines formal
            education with practical expertise gained through hands-on project
            experience. Passionate about innovation and continuous learning,
            Nzayisenga excels in delivering high-quality solutions that meet
            client needs effectively.
          </blockquote>
        </div>
        <div className="biography">
          <img src={image} alt="Profile" />
          <div>
            <h2><span>Name</span>: pacifique MBONIMANA</h2>
            <p><span>Title</span>: COO of 1000-hills-solistors</p>
            <p><span>Number</span>: 0790839315</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
