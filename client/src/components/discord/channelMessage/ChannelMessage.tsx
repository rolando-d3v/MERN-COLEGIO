import React from "react";
import "./channelMessage.scss";

//importar props
export interface Props {
  author: string;
  date: string;
  content?: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
}) => {
  return (
    <div className="message">
      <img className="message__avatar" src="" alt="" />
      <div className="message__content">
        <div>
          <strong> {author} </strong>
          {isBot ? <span>Bot</span> : ""}
          <time>{date} </time>
        </div>
        <p>{content} </p>
      </div>
    </div>
  );
};

export default ChannelMessage;
