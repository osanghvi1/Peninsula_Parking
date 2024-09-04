//Author: Om Sanghvi


const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "db5016294665.hosting-data.io",
  user: "dbu3611753",
  password: "PennParking1",
  database: "dbs13257134",
});

module.exports = db;
