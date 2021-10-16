const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const studentsRouter = require('./routes/studentsRouter');
const teachersRouter = require('./routes/teacherRouter');
const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/authRouter');

app.use('/auth', authRouter);
app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);
app.use('/users', usersRouter);

/*** Iniciar el servidor */
app.listen(5000, () => {
  console.log('Ya el servidor está corriendo!');
});