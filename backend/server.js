// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
