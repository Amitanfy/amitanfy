const express = require("express");
const cors = require("cors");
const connect = require("./db.js");
const userRouter = require("./routes/user.router.js");
const petPostRouter = require("./routes/petpost.router.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const port = process.env.port;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(userRouter);
app.use(petPostRouter);

connect();

app.listen(port, () => {
  console.log(`Server is listening on localhost:${port}.`);
});
