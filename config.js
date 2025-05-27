const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "P4IkCJ4Y#4_6ho_id9g8WKj_BO11AMoXhyXQ73MrHKxN2VUY5L4I",
  OWNER_NUM: process.env.OWNER_NUM || "94788779949",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/Dark-Robin/Bot-Helper/refs/heads/main/autoimage/Bot%20robin%20iz%20alive.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "Hello I am alive now ",
  MODE: process.env.MODE || "public",
  
};
