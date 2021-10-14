const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  admin: { type: Boolean, required: true, default: false }
});

module.exports = mongoose.model('User', UserSchema);