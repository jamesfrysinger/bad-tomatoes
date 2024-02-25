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

app.get("/api/titles", (req, res) => {
  const searchQuery = req.query.q;
  const searchPage = req.query.p !== 0 ? req.query.p : 1;
  const searchPageSize = 100;
  const searchPageOffset = (searchPage - 1) * searchPageSize;

  const sql = `SELECT * FROM title_basics WHERE primaryTitle LIKE '%${searchQuery}%' LIMIT ${searchPageSize} OFFSET ${searchPageOffset}`;

  pool.query(sql, (error, results, fields) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
