// backend/config/db.js

const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no MySQL:", err.message);
  } else {
    console.log("Conectado ao banco de dados MySQL!");
  }
});

module.exports = db;
