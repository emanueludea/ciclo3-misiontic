var express = require('express');
var studentsRouter = express.Router();
const studentsController = require('../controllers/studentsController');

studentsRouter.route('/')
  .get(studentsController.listStudents)
  .post(studentsController.createStudent);

studentsRouter.route('/:id')
  .get(studentsController.getStudent)
  .put(studentsController.modifyStudent)
  .delete(studentsController.deleteStudent);

/* studentsRouter.get('/', studentsController.listStudents)

studentsRouter.get('/:id', studentsController.getStudent);

studentsRouter.post('/', studentsController.createStudent)

studentsRouter.put('/:id', studentsController.modifyStudent);

studentsRouter.delete('/:id', studentsController.deleteStudent); */

module.exports = studentsRouter;