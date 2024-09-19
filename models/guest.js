const mongoose = require('mongoose');

const guestTable = new mongoose.Schema({
  guestID: { type: String, required: true },
  groupID: { type: String },
  name: { type: String, required: true },
  otherName: { type: String },
  plusOne: { type: Boolean, required: true },
});

module.exports = mongoose.model('Guest', guestTable);
