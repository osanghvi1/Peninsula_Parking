//Author: Om Sanghvi


const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "Pangra1587",
  database: "PENN",
});

module.exports = db;
