import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const model = initModels(sequelize);

const getLike = async (req, res) => {
  try {
    const { user_id, res_id, date_like } = req.body;
    let data = await model.like_res.create({
      user_id,
      res_id,
      date_like,
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "error API post like" });
  }
};

const removeLike = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
    await model.like_res.destroy({
      where: {
        user_id,
        res_id,
      },
    });
    return res.status(200).json("Unlike successfully");
  } catch (error) {
    return res.status(500).json({ message: "error API unlike" });
  }
};

const getLikeByResId = async (req, res) => {
  try {
    const res_id = req.params.resId;
    const data = await model.like_res.findAll({
      where: { res_id },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "error API get like by res id" });
  }
};

const getLikeByUserId = async (req, res) => {
  try {
    const user_id = req.params.userId;
    const data = await model.like_res.findAll({
      where: { user_id },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "error API get like by user id" });
  }
};

export { getLike, removeLike, getLikeByResId, getLikeByUserId };
