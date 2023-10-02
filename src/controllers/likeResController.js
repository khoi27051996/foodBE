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
    include: ["re"]
  })
  res.send(data)
};

const getListLikeByUser = async (req, res)=>{
    let {userId} = req.params;
    let data = await model.like_res.findByPk(userId, {
        include: ["user"]
    });
    res.send(data)
}
export { getLike, getListLikeByRes, getListLikeByUser };
