import Sequelize from "sequelize";
import User from "../app/models/User";
import databaseConfig from "../config/database";
import Recipient from "../app/models/Recipient";

// this is the the file that connects to the database
const models = [User, Recipient];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
