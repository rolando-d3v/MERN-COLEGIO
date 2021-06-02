import React from "react";
import ChannelData from "../channelData/ChannelData";
import ChannelInfo from "../channelInfo/ChannelInfo";
import ChannelList from "../channelList/ChannelList";
import ServerList from "../serverList/ServerList";
import ServerName from "../serverName/ServerName";
import UserInfo from "../userInfo/UserInfo";
import UserList from "../userList/UserList";
import "./layout.scss";

const Layout: React.FC = () => {
  return (
    <div className="layout-discord">
      <ServerList />
      <ServerName />
      <ChannelInfo/>
      <ChannelList/>
      <UserInfo/>
      <UserList/>
      <ChannelData/>
    </div>
  );
};

export default Layout;
