import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const model = initModels(sequelize);

const addOrder = async (req, res) => {
  try {
    const { food_id, user_id, amount } = req.body;
    await model.orders.create({
      food_id,
      user_id,
      amount,
    });
    return res.status(200).json({ message: "order successfully" });
  } catch (error) {
    return res.status(500).json({ message: "error API add order" });
  }
};

export { addOrder };
