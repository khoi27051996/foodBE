import { createToken } from "../config/jwt.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let modal = initModels(sequelize);

// Lấy danh sách người dùng:

const getUser = async (req, res) => {
  let data = await modal.users.findAll();
  res.send(data);
};

const addUser = async (req, res) => {
  let { full_name, email, password, trang_thai } = req.body;

  let checkEmail = await modal.users.findOne({
    where: {
      email: email,
    },
  });

  if (checkEmail) {
    res.send("Email đã tồn tại!!!");
    return;
  }
  let newUser = {
    full_name,
    email,
    password,
    trang_thai,
  };
  await modal.users.create(newUser);
  res.send("Tạo tài khoản thành công!!!");
};

const userLogin = async (req, res) => {
  let { email, password } = req.body;
  let checkEmail = await modal.users.findOne({
    where: {
      email: email,
    },
  });
  if (checkEmail) {
    if (password == checkEmail.password) {
      let token = createToken({ checkEmail, password: "" });
      console.log(checkEmail)
      res.send(token)
    } else {
      res.send("Sai mật khẩu!!")
    }
  }else {
    res.send("Sai email!!!")
  }
};
export { getUser, addUser, userLogin };
