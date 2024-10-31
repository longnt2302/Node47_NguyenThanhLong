import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const model = initModels(sequelize);

const addRate = async (req, res) => {
  try {
    const { user_id, res_id, amount, date_rate } = req.body;
    await model.rate_res.create({
      user_id,
      res_id,
      amount,
      date_rate,
    });
    return res.status(200).json({ message: "add rate successfully" });
  } catch (error) {
    return res.status(500).json({ message: "error API add rate" });
  }
};

const getRateByRes = async (req, res) => {
  try {
    const res_id = req.params.resId;
    const data = await model.rate_res.findAll({
      where: { res_id },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "error API get rate by res" });
  }
};

const getRateByUser = async (req, res) => {
  try {
    const user_id = req.params.userId;
    const data = await model.rate_res.findAll({
      where: { user_id },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "error API get rate by user id" });
  }
};

export { addRate, getRateByRes, getRateByUser };
