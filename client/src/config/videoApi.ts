import { VideoType } from '../types';
import { clienteAxios } from './clienteAxios';

// GET ALL USER
//********************************/
export const getVideos = async () => {
  return await clienteAxios.get<VideoType[]>(`/videos`);
};


// GET ONE USER
//********************************/
export const getVideoById = async (id: string) => {
  return await clienteAxios.get<VideoType>(`/videos/${id}`);
};



// CREATED ONE USER
//********************************/
export const createNewVideo = async (video: VideoType) => {
  return await clienteAxios.post(`/videos`, video);
};


// UPDATED ONE USER
//********************************/
export const updateVideo = async (id: string, video: VideoType) => {
  return await clienteAxios.put(`/videos/${id}`, video);
};


// DELETE ONE USER
//********************************/
export const deleteVideoById = async (id: string) => {
  return await clienteAxios.delete(`/videos/${id}`);
};

