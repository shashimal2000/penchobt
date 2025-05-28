const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "P04CxTyR#s6-IrvjjJmPRRj43EymGCtB-50dMyvS__6IsjbapX8s",
  OWNER_NUM: process.env.OWNER_NUM || "94757501723",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/Dark-Robin/Bot-Helper/refs/heads/main/autoimage/Bot%20robin%20iz%20alive.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "Hello I am alive now ",
  MODE: process.env.MODE || "public",
  AUTO_REPLY: process.env.AUTO_REPLY || "true",

};
