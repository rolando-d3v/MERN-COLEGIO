import React from "react";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import "./channelList.scss";

const listChannel = [
  { id: 1, name: "chat-livre" },
  { id: 2, name: "chat-dota" },
  { id: 3, name: "chat-facebook" },
  { id: 4, name: "chat-github" },
  { id: 5, name: "chat-wasap" },
  { id: 5, name: "chat-wasap" },
];

const ChannelList: React.FC = () => {
  return (
    <div className="channel-list">
      <div className="channel-list__header">
        <span className="channel-list__text">CANAIS DE TEXTO</span>
        <RiIcons.RiAddLine className="channel-list__icon-add" />
      </div>
      {listChannel.map((lis, index) => (
        <section key={index}  className="channel-list__btn-list">
          <div className="btn-list__name" >
            <FaIcons.FaHashtag />
            <span> {lis.name}</span>
          </div>
          <div className="btn-list__icon">
            <FaIcons.FaUserPlus className='icon_user' />
            <FaIcons.FaCog className='icon_setting'/>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ChannelList;
