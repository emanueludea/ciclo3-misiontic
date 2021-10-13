const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  dni: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  phone: Number,
  office: String
});

module.exports = mongoose.model('Teacher', TeacherSchema);