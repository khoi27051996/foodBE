import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);
const getFood = async (req, res) => {
  let data = await model.food.findAll()
  res.send(data)
};

export { getFood };
