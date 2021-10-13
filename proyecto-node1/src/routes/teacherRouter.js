var express = require('express');
var teacherRouter = express.Router();
const teacherController = require('../controllers/teacherController');

teacherRouter.route('/')
  .get(teacherController.listTeachers)
  .post(teacherController.createTeacher);

teacherRouter.route('/:id')
  .get(teacherController.getTeacher)
  .put(teacherController.modifyTeacher)
  .delete(teacherController.deleteTeacher);

module.exports = teacherRouter;