// server.js
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const pool = mysql.createPool({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bad_tomatoes",
});

pool.query("SELECT * FROM title_crew", (error, results, fields) => {
  if (error) {
    console.error("Error executing query:", error);
    return;
  }
  console.log("Query results:", results);
});

pool.on("error", (error) => {
  console.error("Database connection error:", error);
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
