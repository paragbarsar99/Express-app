const express = require("express");
require("dotenv").config();
// import express from "express";

const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send(`hello port ${port}`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
