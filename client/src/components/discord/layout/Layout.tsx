import React from "react";
import ChannelInfo from "../channelInfo/ChannelInfo";
import ChannelList from "../channelList/ChannelList";
import ServerList from "../serverList/ServerList";
import ServerName from "../serverName/ServerName";
import UserInfo from "../userInfo/UserInfo";
import "./layout.scss";

const Layout: React.FC = () => {
  return (
    <div className="layout-discord">
      <ServerList />
      <ServerName />
      <ChannelInfo/>
      <ChannelList/>
      <UserInfo/>
    </div>
  );
};

export default Layout;
