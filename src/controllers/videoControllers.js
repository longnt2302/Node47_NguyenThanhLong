import initModels from "../models/init-models.js";

import sequelize from "../models/connect.js";

import { Op } from "sequelize"; // Operator

// tạo object model đại diện cho tất cả model của ORM
const model = initModels(sequelize);

const getVideos = async (req, res) => {
  try {
    let data = await model.video.findAll();
    console.log("data: ", data);
    return res.status(200).json(data);
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({ message: "error for API get list videos" });
  }
};

const getTypes = async (req, res) => {
  try {
    let data = await model.video_type.findAll();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "error API get types" });
  }
};

const getVideosByTypeId = async (req, res) => {
  try {
    let { typeId } = req.params;
    let data = await model.video.findAll({
      where: {
        type_id: typeId,
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "error API get videos by type id" });
  }
};

const getVideoById = async (req, res) => {
  try {
    let { videoId } = req.params;
    let data = await model.video.findOne({
      where: {
        video_id: videoId,
      },
      include: [
        {
          model: model.users,
          as: "user",
        },
      ],
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "error API get video by id" });
  }
};

export { getVideos, getTypes, getVideosByTypeId, getVideoById };
