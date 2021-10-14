const express = require('express');
const teachersRouter = express.Router();

const teachersController = require('../controllers/teachersController');


teachersRouter.get('/', teachersController.listTeachers);

teachersRouter.post('/', teachersController.createTeacher);

teachersRouter.put('/:id', teachersController.modifyTeacher);

teachersRouter.delete('/:id', teachersController.deleteTeacher);

module.exports = teachersRouter;