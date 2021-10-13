var express = require('express');
var studentsRouter = express.Router();
//const { listStudents, createStudent, getStudent, modifyStudent, deleteStudent } = require('./controllers/studentsController');
const studentsController = require('../controllers/studentsController');

studentsRouter.route('/')
  .get(studentsController.listStudents)
  .post(studentsController.createStudent);

studentsRouter.route('/:id')
  .get(studentsController.getStudent)
  .put(studentsController.modifyStudent)
  .delete(studentsController.deleteStudent);

module.exports = studentsRouter;