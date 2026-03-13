const express = require("express");
const _ = require("lodash");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World", timestamp: _.now() });
});

app.get("/fetch", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
