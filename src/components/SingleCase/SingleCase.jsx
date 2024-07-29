import React from "react";
import backGroundImage from '../../assets/images/bg.png'
import finalWhite from '../../assets/images/finalwhite.png'
const SingleCase = () => {
  return (
    <div>
      <div className="wrapper-all-single" style={{ padding: "20px" }}>
        <div className="logo" style={{ marginBottom: "20px" }}>
          <img
            src={finalWhite}
            alt="Logo"
            style={{ maxWidth: "100px" }}
          />
          <div>
            <h1 style={{ margin: "10px 0" }}>1000 Hills SOLISTORS</h1>
            <h2 style={{ margin: "10px 0" }}>Building Bridges to Justice</h2>
          </div>
        </div>
        <div
          className="siglecase-data"
          style={{
            width: "90%",
            backgroundColor: "#021742",
            padding: "20px",
            margin: "0 auto",
            backgroundImage: `url(${backGroundImage})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
            SUBMITTED CASE:
          </h1>

          <h3>Case Owner:</h3>
          <div className="caseOwner fitalic"></div>
          <h3>Case Type:</h3>
          <div className="casetype fitalic"></div>
          <h3>Case SubType:</h3>
          <div className="caseSubType fitalic"></div>
          <h3>Case Summary:</h3>
          <div className="caseSummary fitalic"></div>

          <h1>Submitted File</h1>
          <div id="iframeContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleCase;
