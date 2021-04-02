// import React from "react";
import { VideoType } from "../../types";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import "./video.item.scss";

interface Props {
  video: VideoType;
}

export default function Video({ video }: Props) {
  const history = useHistory();

  return (
    <div
      className="card_video"
      onClick={() => history.push(`/video/${video._id}`)}
    >
      <div className="card_body">
        <h3 className="card_title">{video.title} </h3>
        <p className="desc_video">{video.description} </p>
        <div className="div_video">
          <ReactPlayer
            url={video.url}
            className="react-player"
            width="100%"
            //   height='100%'
          />
        </div>
      </div>
    </div>
  );
}
