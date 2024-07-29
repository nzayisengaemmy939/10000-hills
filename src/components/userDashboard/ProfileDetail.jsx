import React from 'react';
import './dash.css'
import edit from "../../assets/images/edit.svg";

const ProfileDetail = ({
  name = "John Doe",
  email = "john.doe@example.com",
  id = "123456789",
  phone = "+1234567890",
  preferredContact = "Email",
  address = "123 Main St, City, Country",
  joined = "January 1, 2020",
  onLogout,
}) => {
  return (
    <div>
      <div className="prof-detail">
        <div id="alldetails">
          <div id="details1">
            <div className="profile-data">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/pastel-glyph/64/228BE6/name.png"
                alt="name"
                className="detailicon"
              />
             <span> Names: </span>{name}
            </div>
            <div className="profile-data">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/228BE6/secured-letter--v1.png"
                className="detailicon"
                alt="secured-letter--v1"
              />
               <span>Email: </span>{email}
            </div>
            <div className="profile-data">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/228BE6/identity-theft.png"
                alt="identity-theft"
                className="detailicon"
              />
               <span>ID Number:</span> {id}
            </div>
          </div>
          <div id="details2">
            <div className="profile-data">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/wired/64/228BE6/phone.png"
                alt="phone"
                className="detailicon"
              />
              <span> Phone: </span> {phone}
            </div>
            <div className="profile-data">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/228BE6/phone-contact.png"
                alt="phone-contact"
                className="detailicon"
              />
               <span>Preferred Contact: </span> {preferredContact}
            </div>
            <div className="profile-data">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/228BE6/order-delivered.png"
                alt="order-delivered"
                className="detailicon"
              />
                <span>Address: </span>{address}
            </div>
          </div>
        </div>

        <div className="profile-data">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/external-outline-geotatah/64/228BE6/external-register-training-management-system-outline-geotatah.png"
            alt="external-register-training-management-system-outline-geotatah"
            className="detailicon"
          />
             <span className='detail'>Joined from: </span>{joined}
        </div>

        <div className="profile-footer">
          <div onClick={onLogout} style={{ cursor: 'pointer', color: 'red' }}>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/FA5252/logout-rounded.png"
              alt="logout-rounded"
              className="detailicon"
            />
            LOGOUT
          </div>
          <img src={edit} className="edit"  width="19px" height="19px"/>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
