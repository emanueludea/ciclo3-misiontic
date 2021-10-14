const studentModel = require('../database/student');

listStudents = (req, res) => {
  console.log(req.params);
  studentModel.find().then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

getStudent = (req, res) => {
  console.log(req.params);
  studentModel.find({ _id: req.params.id }).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

createStudent = (req, res) => {
  console.log(req.params, req.body, req.headers);
  studentModel.create(req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

modifyStudent = (req, res) => {
  console.log(req.params, req.body, req.headers);
  studentModel.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

deleteStudent = (req, res) => {
  console.log(req.params);
  studentModel.findByIdAndDelete(req.params.id).then(data => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

module.exports = {
  listStudents, getStudent, createStudent, modifyStudent, deleteStudent
}