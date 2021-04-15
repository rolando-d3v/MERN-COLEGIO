import React from "react";
import "./serverButtom.scss";

interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButtom: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <button
      className={`btn-server
      ${isHome && "btn-server__principal"} 
      ${selected ? "active" : ""}`}
    >
      {/* <button className={selected ? 'active' : 'btn-server'} > */}
      {isHome && <img src="assets/discord/Logo.svg" alt="logo" />}
      <span
        style={{ display: hasNotifications ? "inline" : "none" }}
        className="span-noty"
      ></span>
      <span
        style={{ display: mentions  ? "inline" : "none" }}
        className="span-mentions"
      >
        {mentions}
      </span>
    </button>
  );
};

export default ServerButtom;
