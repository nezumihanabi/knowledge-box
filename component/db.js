import Sequelize from "sequelize";
const host = "localhost:3306";
const database = "testdb";
const username = "root";
const password = "";

const sequelize = new Sequelize(database, username, password, {
  dialect: "mysql",
});

sequelize.authenticate();

const KnowleadgeModel = sequelize.define("knowleadge", {
  id: {
    field: "id",
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  memo: {
    field: "memo",
    type: Sequelize.STRING(1000),
    allowNull: true,
  },
  file: { field: "file", type: Sequelize.BLOB, allowNull: true },
  filename: {
    field: "filename",
    type: Sequelize.STRING(1000),
    allowNull: true,
  },
});

export async function findAll() {
  return await KnowleadgeModel.findAll();
}

export async function add(addData) {
  return await KnowleadgeModel.create(addData);
}

const UserModel = sequelize.define("user", {
  id: {
    field: "id",
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    field: "name",
    type: Sequelize.STRING(20),
    allowNull: true,
  },
  email: { field: "email", type: Sequelize.STRING(50) },
  password: {
    field: "password",
    type: Sequelize.STRING(100),
  },
});

export async function userCreate(data) {
  return await UserModel.create(data);
}

export async function userSearch(email) {
  let user = undefined;
  await UserModel.findAll({
    where: {
      email: email,
    },
  }).then(function (result) {
    user = result;
  });
  return user;
}
