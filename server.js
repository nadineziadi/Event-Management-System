const express = require("express");
const eventApi = require("./routes/event");
require("./config/connect");

const app = express();

app.use("/article , articleApi");

app.use("/getimage", express.static("./uploads"));

app.listen(3000, () => {
  console.log("server work ");
});
