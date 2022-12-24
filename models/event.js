const mongoose = require("mongoose");

const Event = mongoose.model("Event", {
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  address: {
    type: String,
  },
  image: {
    type: String,
  },
});
