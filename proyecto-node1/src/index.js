const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const studentModel = require('./database/student');
const teacherModel = require('./database/teacher');

const mongoose = require('./database/connection');

app.get('/students', (req, res) => {
  console.log(req.params);
  studentModel.find().then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
})

app.get('/students/:id', (req, res) => {
  console.log(req.params);
  studentModel.find({ _id: req.params.id }).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
});

app.post('/students', (req, res) => {
  console.log(req.params, req.body, req.headers);
  studentModel.create(req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
})

app.put('/student/:id', (req, res) => {
  console.log(req.params, req.body, req.headers);
  studentModel.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
});

app.delete('/students/:id', (req, res) => {
  console.log(req.params);
  studentModel.findByIdAndDelete(req.params.id).then(data => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
});

//****** Teachers *******/

app.get('/teachers', (req, res) => {
  teacherModel.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err));
});

app.post('/teachers', (req, res) => {
  teacherModel.create(req.body)
    .then(newTeacher => res.json(newTeacher))
    .catch(err => res.status(500).send(err));
});

app.put('/teachers/:id', (req, res) => {
  const { id } = req.params;
  teacherModel.findByIdAndUpdate(id, req.body)
    .then(oldTeacher => res.status(200).json(oldTeacher))
    .catch(err => res.status(500).send(err));
});

app.delete('/teachers/:id', (req, res) => {
  const { id } = req.params;
  teacherModel.findByIdAndDelete(id)
    .then(oldTeacher => {
      res.json(oldTeacher);
    })
    .catch(error => res.status(500).send(error));
})

/*** Iniciar el servidor */
app.listen(5000, () => {
  console.log('Ya el servidor está corriendo!');
});