import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "Jhon Doe",
    email: "jhondoe@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
  {
    name: "Marry Jane",
    email: "marryjane@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
];

export default users;
