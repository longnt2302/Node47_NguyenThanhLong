import { Sequelize } from "sequelize";

// tạo object sequelize để connect tới database
const sequelize = new Sequelize(
  "node47_youtube", // tên database
  "root", // tên username
  "123456", // password
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  }
);

export default sequelize;
