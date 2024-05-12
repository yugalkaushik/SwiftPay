const express = require("express");
const mainRouter = require("./routes/index")

const app = express.Router();

app.use("api/v1", mainRouter)