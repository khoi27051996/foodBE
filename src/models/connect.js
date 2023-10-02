import { Sequelize } from "sequelize";
import config from "../config/config.js";

const { host, dataBase, dialect, pass, port, userName } = config;
const sequelize = new Sequelize(dataBase, userName, pass, {
  host: host,
  port: port,
  dialect: dialect,
});

export default sequelize