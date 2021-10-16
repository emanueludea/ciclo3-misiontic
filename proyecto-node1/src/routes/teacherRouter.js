const express = require('express');
const teachersRouter = express.Router();

const teachersController = require('../controllers/teachersController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

teachersRouter.use(tokenMiddleware.verifyToken);

teachersRouter.get('/', teachersController.listTeachers);
teachersRouter.post('/', teachersController.createTeacher);
teachersRouter.put('/:id', teachersController.modifyTeacher);
teachersRouter.delete('/:id', teachersController.deleteTeacher);

module.exports = teachersRouter;