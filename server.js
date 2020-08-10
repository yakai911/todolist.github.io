const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("build"));

app.get("/", (req, res) => {
  res.sendfile(__dirname, "/build/index.html");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running in ${PORT}`));
