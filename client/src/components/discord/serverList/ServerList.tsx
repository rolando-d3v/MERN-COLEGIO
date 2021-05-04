import React from "react";
import ServerButtom from "../serverButtom/ServerButtom";
import "./serverList.scss";

const ServerList: React.FC = () => {
  return (
    <div className="server-list">
      <div className="server-list__content">
        <ServerButtom isHome />
        <span className="server-list__separador"> </span>
        <ServerButtom hasNotifications />
        <ServerButtom mentions={9} />
        <ServerButtom />
        <ServerButtom />
        <ServerButtom />
        <ServerButtom mentions={85} />
        <ServerButtom hasNotifications />
        <ServerButtom />
        <ServerButtom />
        <ServerButtom />
        <ServerButtom />
        <ServerButtom />
        <ServerButtom />
      </div>
    </div>
  );
};

export default ServerList;
