import { useEffect, useState } from "react";
import * as api from "../../config/videoApi";
import { VideoType } from "../../types";
import Video from "../../components/video/Video.item";
import './videos.scss'

export default function Videos() {
  const [videoData, setVideoData] = useState<VideoType[]>([]);

  useEffect(() => {
    (async () => {
      const result = await api.getVideos()
      console.log(result.data);
      setVideoData(result.data);
    })();
  }, []);

  return (
    <div className='content_videos'  >
      {videoData.map((video) => {
        return <Video key={video._id} video={video} />;
      })}
    </div>
  );
}
