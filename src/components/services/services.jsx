import React from "react";
import "./services.scss";
import emmy from "../../assets/images/emmy.png";
import paccy from "../../assets/images/team.png";
import hubert from "../../assets/images/hubert.png";
import yves from "../../assets/images/yves.png";

const Services = () => {
  const bgImage = require("../../assets/images/bg.png").default;
  return (
    <div>
      <div className="service-body">
        <div className="service-section">
          <div className="heading">
            <h1>Services</h1>
            <hr />
          </div>
          <div className="cards">
            <div className="card1 card">
              <h1>Consultance</h1>
              <h4>Tax consultance</h4>
              <br />

              <div className="home-buttons">
                <button>get consultance</button>
              </div>
            </div>
            <div className="card2 card">
              <h1>Advocate Bridge</h1>
              <h4>Linking people with appropriate advocate</h4>
              <br />

              <div className="home-buttons">
                <button>submit Case</button>
              </div>
            </div>
            <div className="card3 card">
              <h1>Educational support</h1>
              <h4>Interbership</h4>
              <br />

              <div className="home-buttons">
                <button>get internership</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
