const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require('./database/connection');

const studentsRouter = require('./routes/studentsRouter');
const teachersRouter = require('./routes/teacherRouter');
const usersRouter = require('./routes/usersRouter')

app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);
app.use('/users', usersRouter);

/*** Iniciar el servidor */
app.listen(5000, () => {
  console.log('Ya el servidor está corriendo!');
});