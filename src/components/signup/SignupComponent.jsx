import React, { useState } from "react";
import "./signup.css";
import backGroundImage from "../../assets/images/bg.png";
import finalwhite from "../../assets/images/finalwhite.png";
import eye from "../../assets/images/eye.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    idNo: "",
    phoneNumber: "",
    preferredContact: "",
    district: "",
    sector: "",
    cell: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstNameError: "",
    emailError: "",
    idNoError: "",
    phoneNumberError: "",
    preferredContactError: "",
    addressError: "",
    passwordError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {
      firstNameError: "",
      emailError: "",
      idNoError: "",
      phoneNumberError: "",
      preferredContactError: "",
      addressError: "",
      passwordError: "",
    };

    if (!formData.firstName) {
      newErrors.firstNameError = "First Name is required";
      valid = false;
    }

    if (!formData.email) {
      newErrors.emailError = "Email is required";
      valid = false;
    }

    if (!formData.idNo) {
      newErrors.idNoError = "ID/Tin/Passport Number is required";
      valid = false;
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumberError = "Phone Number is required";
      valid = false;
    }

    if (!formData.preferredContact) {
      newErrors.preferredContactError = "Preferred Contact is required";
      valid = false;
    }

    if (!formData.district || !formData.sector || !formData.cell) {
      newErrors.addressError = "Complete Address is required";
      valid = false;
    }

    if (!formData.password) {
      newErrors.passwordError = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data: ", formData);
    }
  };

  return (
    <div>
      <div className="signup-container">
        <div
          style={{
            backgroundImage: `url(${backGroundImage})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="signup-bg"
        >
          <div>
            <img src={finalwhite}></img>
            <h1>Get Justice</h1>
            <p>1000 hills solistors</p>
            {/* <button>Login</button> */}
          </div>
        </div>

        <div className="signup-detail">
          <h2>Hello!</h2>
          <p>Create an Account to get Started</p>
          <form
            id="signup-form"
            onChange={handleChange}
            onSubmit={handleSubmit}
          >
            <div id="names">
              <div className="signup-field names" id="signfirstName">
                <input
                  placeholder="First Name*"
                  name="firstName"
                  className="firstName"
                  value={formData.firstName}
                />
              </div>
              <div className="signup-field names">
                <input
                  placeholder="Last Name*"
                  name="lastName"
                  className="lastName"
                  value={formData.lastName}
                />
              </div>
            </div>
            <div
              id="signfirstNameError"
              style={{ textAlign: "center", color: "red" }}
            >
              {errors.firstNameError}
            </div>

            <div className="signup-field" id="signEmail">
              <input
                placeholder="Email*"
                type="email"
                name="email"
                className="email"
                value={formData.email}
              />
            </div>
            <div id="emailError" style={{ textAlign: "center", color: "red" }}>
              {errors.emailError}
            </div>
            <div className="number">
              <div id="signidNo">
                <input
                  placeholder="ID/Tin/Passport Number*"
                  name="idNo"
                  className="idNo"
                  value={formData.idNo}
                />
              </div>
              {/* <div id="idNoError" style={{ textAlign: "center", color: "red" }}>
              {errors.idNoError}
            </div> */}

              <div id="signphoneNumber">
                <input
                  placeholder="Phone Number*"
                  name="phoneNumber"
                  className="phoneNumber"
                  value={formData.phoneNumber}
                />
              </div>
              {/* <div
                id="phoneNumberError"
                style={{ textAlign: "center", color: "red" }}
              >
                {errors.phoneNumberError}
              </div> */}
            </div>
            <div className="signup-field" id="signpreferredContact">
              <select
                name="preferredContact"
                className="preferredContact"
                id="preferred"
                value={formData.preferredContact}
              >
                <option value="" disabled selected>
                  Preferred contact*
                </option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>
            <div
              id="preferredContactError"
              style={{ textAlign: "center", color: "red" }}
            >
              {errors.preferredContactError}
            </div>

            <br />

            <fieldset id="signaddress">
              <legend>Address:</legend>
              <div className="signup-field" style={{ width: "90%" }}>
                <input
                  placeholder="District/Akarere*"
                  name="district"
                  className="district"
                  value={formData.district}
                />
              </div>
              <div id="address-sub">
                <div className="signup-field address-register">
                  <input
                    placeholder="Sector/Umurenge*"
                    name="sector"
                    className="sector"
                    value={formData.sector}
                  />
                </div>
                <div className="signup-field address-register">
                  <input
                    placeholder="Cell/Akagari*"
                    name="cell"
                    className="cell"
                    value={formData.cell}
                  />
                </div>
              </div>
            </fieldset>
            <div
              id="addressError"
              style={{ textAlign: "center", color: "red" }}
            >
              {errors.addressError}
            </div>
            <div className="password">
            <div className="password-field">
             
             <input
               type="password"
               placeholder="Password"
               className="pass"
               name="password"
               // ref={passRef}
             />
                <img src={eye} alt="eye" />
           </div>
              <div className="password-field">
             
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="pass"
                  name="password"
                  // ref={passRef}
                />
                   <img src={eye} alt="eye" />
              </div>
            </div>

            <div id="buttons-id" className="buttons">
              <button id="signup-register" type="submit">
                Register
              </button>
              <h2>
                Already a member? <a href="login.html">Sign-In</a>
              </h2>
            </div>
          </form>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Signup;
