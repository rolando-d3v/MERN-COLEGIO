import React from "react";
import * as FaIcons from 'react-icons/fa'
import "./channelInfo.scss";

const ChannelInfo: React.FC = () => {
  return (
    <div className="channel-info">
        <FaIcons.FaHashtag className='channel-info__icon'  />
      <h4 className='channel-info__text' >chat-livre</h4>
      <div className='channel-info__palo'></div>
      <span className='channel-info__text-secon' >Canal aberto para conversas</span>
    </div>
  );
};

export default ChannelInfo;
