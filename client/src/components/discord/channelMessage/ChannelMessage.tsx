import React from "react";
import "./channelMessage.scss";

//importar props
export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
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
    <div className={`message ${hasMention ? "mention" : ""} `}>
      <img
        className={`message__avatar ${isBot ? "bot" : ""} `}
        src="assets/avatar.jpg"
        alt="avatar"
      />
      <div className="message__content">
        <div className="message__content--header">
          <strong> {author} </strong>
          {isBot && <span>Bot</span> }
          <time>{date} </time>
        </div>
        <div className="message__content--text-message">{content} </div>
      </div>
    </div>
  );
};

export default ChannelMessage;
