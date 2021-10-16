const express = require('express');
const usersRouter = express.Router();

const usersController = require('../controllers/usersController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

usersRouter.use(tokenMiddleware.verifyToken);

usersRouter.route('/')
  .get(usersController.listUsers)
  .post(usersController.createUser);

usersRouter.route('/:id')
  .get(usersController.getUser)
  .put(usersController.modifyUser)
  .delete(usersController.deleteUser);

module.exports = usersRouter;