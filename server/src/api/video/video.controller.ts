// import {Request, Response} from 'express'
import { RequestHandler } from "express";
import videoModel from "./video.model";

// CREATED ONE USER
//********************************/
export const createVideo: RequestHandler = async (req, res) => {
  try {
    const video = new videoModel(req.body);
    const videoSave = await video.save();
    return res.json(videoSave);
  } catch (err) {
    res.json({ msn: "Error", err });
  }
};

// GET ALL USERS
//********************************/
export const getVideos: RequestHandler = async (req, res) => {
  try {
    const video = await videoModel.find();
    res.json(video);
  } catch (err) {
    return res.json({ msn: "Error", err });
  }
};

// GET ONE USER
//********************************/
export const getVideoID: RequestHandler = async (req, res) => {
  try {
    const video = await videoModel.findOne({ _id: req.params.id });
    if (!video)
      return res.status(404).json({ msn: "Error el video not found" });

    return res.json(video);
  } catch (err) {
    return res.json({ msn: "Error", err });
  }
};

// UPDATED ONE USER
//********************************/
export const updateVideo: RequestHandler = async (req, res) => {
  try {
    const video = await videoModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.json({ msn: "video updated success", video });
  } catch (err) {
    return res.json({ msn: "Error", err });
  }
};

// DELETED ONE USER
//********************************/
export const deleteVideo: RequestHandler = async (req, res) => {
  try {
    const video = await videoModel.findByIdAndDelete({ _id: req.params.id });
    if (!video) return res.json({ msm: "Error video not found" });
    return res.json({ msn: `video deleted success ` });
  } catch (err) {
    return res.json({ msn: "Error", err });
  }
};
