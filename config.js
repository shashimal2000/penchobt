const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Enter your session ID",
  MONGODB: process.env.MONGODB || "mongodb+srv://bota:bota@cluster0.tlvth93.mongodb.net/",
  OWNER_NUM: process.env.OWNER_NUM || "94788779949",
};
