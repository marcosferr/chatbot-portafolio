const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  threadID: {
    type: String,
  },
  messages: {
    type: Array,
    default: [],
  },
  responses: {
    type: Array,
    default: [],
  },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
