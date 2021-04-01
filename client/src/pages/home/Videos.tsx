import { useEffect, useState } from "react";
import { clienteAxios } from "../../config/clienteAxios";
import {VideoType} from '../../types'
import * as FaIcons from 'react-icons/fa'



export default function Videos() {
  const [videoData, setVideoData] = useState<VideoType[]>([]);

  useEffect(() => {
    (async () => {
      const result = await clienteAxios.get(`/videos`);
      console.log(result.data);
      setVideoData(result.data);
    })();
  }, []);

  return (
    <div>
      {videoData.map((video) => {
        return (
          <div key={video._id}>
            <h3>{video.title} </h3>
            <FaIcons.FaAdobe/>
            <h3>{video.description} </h3>
          </div>
        );
      })}
    </div>
  );
}
