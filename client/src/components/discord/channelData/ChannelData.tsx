import React, { useEffect } from "react";
import * as HiIcons from "react-icons/hi";
import ChannelMessage from "../channelMessage/ChannelMessage";
import "./channelData.scss";

const ChannelData: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <section className="container-data">
      <article className="container-data__messages">
        <ChannelMessage
        author="Guilherme Rodz"
        date="21/06/2020"
        />
       
      </article>

      <article className="container-data__content">
        <input
          type="text"
          className="container-data__content--input"
          placeholder="conversar en chat"
        />
        <HiIcons.HiOutlineAtSymbol className="container-data__content--icon" />
      </article>
    </section>
  );
};

export default ChannelData;
