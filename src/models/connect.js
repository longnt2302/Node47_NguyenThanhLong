import { Sequelize } from "sequelize";

const sequelize = new Sequelize("node47_app_food", "root", "123456", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default sequelize;
