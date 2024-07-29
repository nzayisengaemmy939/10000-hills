import React from "react";

const EmailTemplate = ({ email, token }) => {
  const url =
    "https://cdni.iconscout.com/illustration/premium/thumb/verify-email-2748674-2289734.png?f=webp";
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        // display: "flex",
        // flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "70%",
          maxWidth: "600px",
          margin: "auto",
          display:"flex",
          justifyContent:"center",
          marginTop:"20px"
        //   borderBottom: "1px solid black",
        //   border: "2px solid red",
        }}
      >
        <img
          src={url}
          alt="Organization"
          style={{ width: "200px", height: "200px",margin:"auto" }}
        />
      </div>
      <div
        style={{
          width: "70%",
          maxWidth: "600px",
          margin: "auto",
          textAlign: "left",
          fontFamily: "Arial, sans-serif",
          marginTop:"20px"

        //   border: "2px solid red",
        }}
      >
        <p style={{textAlign:"center",fontSize:"24px"}}>Verify Email</p>
        <p style={{ fontSize: "16px" }}>Hi! {email},</p>
        <p style={{ fontSize: "16px" }}>
          Thank you for your interest in our organization! You are almost done

        </p>
        <p style={{ fontSize: "16px" }}>
          Please{" "}
          <p style={{ color: "#007bff", textDecoration: "none" }}>click here</p>{" "}
          to confirm your account.
        </p>
      </div>
      <div
        style={{
          width: "70%",
          maxWidth: "600px",
          backgroundColor: "#021742",
          color: "white",
          margin: "auto",
          textAlign: "center",
        //   marginTop: "20px",
          fontFamily: "Arial, sans-serif",
          borderBottom: "1px solid black",
          padding: "10px",
          marginTop:"20px"

        }}
      >
        <p style={{ fontSize: "16px" }}>Thanks!</p>
      </div>
    </div>
  );
};

export default EmailTemplate;
