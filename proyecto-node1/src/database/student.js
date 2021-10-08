const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  dni: { type: Number, required: true },
  name: String,
  age: Number,
  semester: Number,
  subjects: [
    {
      name: String,
      credits: Number,
      teacher: {
        name: String,
        phone: Number
      }
    }
  ]
});
const studentModel = mongoose.model('student', studentSchema);
module.exports = studentModel;