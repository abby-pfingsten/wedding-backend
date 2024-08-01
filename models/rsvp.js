const mongoose = require("mongoose");

const rsvpSchema = mongoose.Schema({
  rsvpId: {type: String, required: true},
  guestId: { type: String, required: true },
  groupId: {type: String},
  name: { type: String, required: true },
  plusOne: { type: Boolean, required: true }
});

module.exports = mongoose.model("Guest", guestSchema);
