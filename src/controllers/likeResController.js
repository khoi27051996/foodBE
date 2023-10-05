import { decodeToken } from "../config/jwt.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

const getLike = async (req, res) => {
  let data = await model.like_res.findAll();
  res.send(data);
};

const getListLikeByRes = async (req, res) => {
  let { resId } = req.params;
  let data = await model.like_res.findByPk(resId, {
    include: ["re"],
  });
  res.send(data);
};

const getListLikeByUser = async (req, res) => {
  let { userId } = req.params;
  let data = await model.like_res.findByPk(userId, {
    include: ["user"],
  });
  res.send(data);
};

const likeOrDislike = async (req, res) => {
  let { resId } = req.body;
  let { token } = req.headers;

  let userLogin = decodeToken(token);
  let { users_id } = userLogin.data.checkEmail;

  let checkLike = await model.like_res.findAll({
    where: {
      users_id: users_id,
      res_id: resId,
    },
  });
  if (checkLike.length == 0) {
    let newData = {
      users_id: users_id,
      res_id: resId,
      date_like: new Date(),
    };
    await model.like_res.create(newData);
    res.send("Like thành công!!!");
  }
  if (checkLike.length != 0) {
    await model.like_res.destroy({ where: { users_id, res_id: resId } });
    res.send("Đã dislike !!!");
  }
};

export { getLike, getListLikeByRes, getListLikeByUser, likeOrDislike };
