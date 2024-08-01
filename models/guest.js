const mongoose = require('mongoose');

const guestSchema = mongoose.Schema({
  guestId: { type: String, required: true },
  groupId: { type: String },
  name: { type: String, required: true },
  otherName: { type: String },
  plusOne: { type: Boolean, required: true },
});

module.exports = mongoose.model('Guest', guestSchema);
