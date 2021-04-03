import { VideoType } from "../../types";
import * as FaIcons from "react-icons/fa";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import * as api from '../../config/videoApi'
import "./video.item.scss";

interface Props {
  video: VideoType;
}

export default function Video({ video }: Props) {
  const history = useHistory();

  const deleteVideo = async (id: string ) => {
    api.deleteVideoById(id)
  };

  return (
    <div className="card_video">
      <div className="card_body">
        <FaIcons.FaTrashAlt
          className="icon_delete"
          onClick={() => video._id && deleteVideo(video._id)  }
        />
        <h3
          className="card_title"
          onClick={() => history.push(`/video/${video._id}`)}
        >
          {video.title}{" "}
        </h3>
        <p className="desc_video">{video.description} </p>
        <div className="div_video">
          <ReactPlayer
            url={video.url}
            className="react-player"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}
