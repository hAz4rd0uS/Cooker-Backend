var mongoose = require("mongoose");

var TokenSchema = new mongoose.Schema(
  {
    value: { type: String, required: true }
  },
  { timestamps: true }
);

mongoose.model("Token", TokenSchema);

module.exports = mongoose.model("Token");
