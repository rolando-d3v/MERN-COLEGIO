import React, { useEffect } from "react";
import * as HiIcons from "react-icons/hi";
import ChannelMessage from "../channelMessage/ChannelMessage";
import "./channelData.scss";

const ChannelData: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <section className="container-data">
      <article className="container-data__messages">
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Guilherme Rodz"
            date="21/06/2020"
            content="Hoje é o meu aniversário!"
            // isBot
            // hasMention
          />
        ))}

        <ChannelMessage
          author="Guilherme Rodz"
          date="21/06/2020"
          content={
            <>
              <span>@Guilherme Rodz</span>, me carrega no LoL e CS de novo por
              favor?
            </>
          }
          hasMention
          isBot
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
