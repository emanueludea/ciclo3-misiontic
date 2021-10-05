const mongoose = require('mongoose');

const student = new mongoose.Schema({
  dni: Number, name: String, age: Number, semester: Number
});

module.exports = mongoose.model('students', student);