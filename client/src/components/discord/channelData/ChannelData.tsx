import React, { useEffect } from "react";
import * as HiIcons from "react-icons/hi";
import "./channelData.scss";

const ChannelData: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <section className="container-data">
      <article className="container-data__messages">
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
        <span>message rolando </span>
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
