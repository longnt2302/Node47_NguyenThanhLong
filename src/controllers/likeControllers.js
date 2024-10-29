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
    res.status(200).json({ message: "error API post like" });
  }
};

export { getLike };
