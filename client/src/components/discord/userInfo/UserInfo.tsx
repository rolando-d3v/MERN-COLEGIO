import React from "react";
import * as FaIcons from 'react-icons/fa'
import "./userInfo.scss";

const UserInfo: React.FC = () => {
  return (
    <section className="user-info">
      <div className="user-info-profile">
        <img src="assets/avatar.jpg" alt="avatar"/>
      </div>
      <div className="user-info-icons">
        <FaIcons.FaMicrophone/>
        <FaIcons.FaHeadphones/>
        <FaIcons.FaHeadphonesAlt/>
        <FaIcons.FaCog/>
      </div>
    </section>
  );
};

export default UserInfo;
