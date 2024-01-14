const dotenv = require("dotenv");

// setup environment variables
dotenv.config();
module.exports = {
  username: process.env.NAME,
  password: process.env.PASSWORD,
};
