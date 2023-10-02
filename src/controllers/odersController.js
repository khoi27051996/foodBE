import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

// Thêm oders:

const addOders = async (req, res) => {
  let { users_id, food_id, amount, code, arr_sub_id } = req.body;

  let newOders = {
    users_id,
    food_id,
    amount,
    code,
    arr_sub_id,
  };
  await model.orders.create(newOders);

  res.send("Thêm oders thành công !!!");
};

// Lấy thông tin những người đặt món ăn đó trong oders: (luyện tập, Không có trong bài tập :D)

const getFoodByOder = async (req, res) => {
  let { foodId } = req.params;

  let dataFood = await model.orders.findByPk(foodId, {
    include: ["food"],
  });
  let dataUser = await model.orders.findAll({
    where: {
      food_id: foodId,
    },
    include: ["user"],
  });
  res.send({ dataFood, dataUser });
};
export { addOders, getFoodByOder };
