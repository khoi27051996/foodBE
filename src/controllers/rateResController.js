import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
let model = initModels(sequelize);

const getListRateByRes = async (req, res) => {
  let { resId } = req.params;

  let data = await model.rate_res.findByPk(resId, {
    include: ["re"],
  });

  res.send(data);
};

const getListRateByUser = async (req, res) => {
  let { userId } = req.params;

  let data = await model.rate_res.findByPk(userId, {
    include: ["user"],
  });

  res.send(data);
};

const addRateRes = async (req, res) => {
  let { users_id, res_id, amount, date_rate } = req.body;
  let newRate = {
    users_id,
    res_id,
    amount,
    date_rate
  };

  await model.rate_res.create(newRate)
  res.send('Thêm đánh giá thành công!!')
};
export { getListRateByRes, getListRateByUser, addRateRes };
