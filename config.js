const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "P4IkCJ4Y#4_6ho_id9g8WKj_BO11AMoXhyXQ73MrHKxN2VUY5L4I",
  MONGODB: process.env.MONGODB || "mongodb+srv://bota:bota@cluster0.tlvth93.mongodb.net/",
  OWNER_NUM: process.env.OWNER_NUM || "94788779949",
};
