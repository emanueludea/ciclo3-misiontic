var express = require('express');
var router = express.Router();
//const { listStudents, createStudent, getStudent, modifyStudent, deleteStudent } = require('./controllers/studentsController');
const studentsController = require('./controllers/studentsController');

app.router('/students')
  .get(studentsController.listStudents)
  .post(studentsController.createStudent);

app.router('/students/:id')
  .get(studentsController.getStudent)
  .put(studentsController.modifyStudent)
  .delete(studentsController.deleteStudent);

module.exports = router;