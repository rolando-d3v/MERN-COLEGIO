import React from "react";
import ChannelInfo from "../channelInfo/ChannelInfo";
import ServerList from "../serverList/ServerList";
import ServerName from "../serverName/ServerName";
import "./layout.scss";

const Layout: React.FC = () => {
  return (
    <div className="layout-discord">
      <ServerList />
      <ServerName />
      <ChannelInfo/>
    </div>
  );
};

export default Layout;
