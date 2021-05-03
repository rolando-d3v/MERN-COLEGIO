import React from "react";
import * as FaIcons from 'react-icons/fa'
import "./userInfo.scss";

const UserInfo: React.FC = () => {
  return (
    <section className="user-info">
      <div className="user-info-profile">
        <img src="assets/avatar.jpg" alt="avatar"/>
        <article className="user-info-profile__text-name" >
            <strong>Rolando D3v</strong>
            <span>#25252</span>
        </article>
      </div>
      <div className="user-info-icons">
        <FaIcons.FaMicrophone/>
        <FaIcons.FaHeadphonesAlt/>
        <FaIcons.FaCog/>
      </div>
    </section>
  );
};

export default UserInfo;
