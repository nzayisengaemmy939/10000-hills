import React from "react";
import "./team.scss";
import emmy from "../../assets/images/emmy.png";
import paccy from "../../assets/images/team.png";
import hubert from "../../assets/images/hubert.png";
import yves from "../../assets/images/yves.png";

const AllTeam = () => {
  const bgImage = require("../../assets/images/bg.png").default;
  return (
    <div className="boardTeam">
      <div className="heading">
        <center>
          <h1>Meet The Team</h1>
        </center>
        <hr />
      </div>

      <div className="team">
        <div id="login-container">
          <div
            class="profile-img"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#00171F",
            }}
          >
            <img src={hubert} alt="" />
          </div>
          <h3>
            HUBERT <br />
            TWIZERE
          </h3>
          <div class="description">
            
            <p>
              LLB candidate with Background in Midwifery, SRHR Specialist with
              GBV Prevention Skills. He worked as RSSB intern Pharmaceutical
              Division and Now working at Kacyiru Hospital in Gynecology and
              Obstetrics Department .
            </p>
          </div>
          {/* <div class="social">
    <a>GitHub</a>
    <a>Twitter</a>
    <a>LinkedIn</a>
  </div> */}
          {/* <button>Hire Me</button> */}
          <footer
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#00171F",
            }}
          >
            <div class="likes">
              
              <h4>CEO & FOUNDER</h4>
            </div>

            <div class="projects">
            {/* <h4>CEO & FOUNDER</h4> */}
            </div>
          </footer>
        </div>
<br />
        <div id="login-container">
          <div
            class="profile-img"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#00171F",
            }}
          >
            <img src={paccy} alt="" />
          </div>
          <h3>
            PACIFIQUE <br />
            MBONIMANA
          </h3>
          <div class="description">
           
            <p>
              Enthusiastic and dedicated Software Developer with a strong
              foundation in computer science and programming principles.
            </p>
          </div>
          {/* <div class="social">
    <a>GitHub</a>
    <a>Twitter</a>
    <a>LinkedIn</a>
  </div> */}
          {/* <button>Hire Me</button> */}
          <footer style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#00171F",
            }}>
            <div class="likes">
            <h4>COO & CO-FOUNDER</h4>
            </div>

            <div class="projects">
             
            </div>
          </footer>
        </div>
      </div>
      {/* --------------------------------------------------------- */}
      <div className="team">
        <div id="login-container">
          <div
            class="profile-img"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#00171F",
            }}
          >
            <img src={yves} alt="" />
          </div>
          <h3>
            YVES <br />
            TUGIRAMAHORO
          </h3>
          <div class="description">
           
            <p>
              Chief Legal Officer at Lachs Golden Ltd, LL.B from Kigali
              Independent University, pursuing LL.M, Executive Director at
              Choice for Hope Initiative. Passionate about social justice.
            </p>
          </div>
          <footer style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#00171F",
            }}>
            <div class="likes">
            <h4>HRM & CO-FOUNDER</h4>
            </div>

            <div class="projects">
             
            </div>
          </footer>
        </div>
        <br />
        <div id="login-container">
          <div
            class="profile-img"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#00171F",
            }}
          >
            <img src={emmy} alt="" />
          </div>
          <h3>
            EMMANUEL <br />
            NZAYISENGA
          </h3>
          <div class="description">
            
            <p>
              Student at the University of Rwanda in computer science and a
              software developer proficient in multiple programming languages.
            </p>
          </div>
          {/* <div class="social">
    <a>GitHub</a>
    <a>Twitter</a>
    <a>LinkedIn</a>
  </div> */}
          <footer style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#00171F",
            }}>
            <div class="likes">
            <h4>CTO & CO-FOUNDER</h4>
            </div>

            <div class="projects">
             
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AllTeam;
