const teacherModel = require('../database/teacher');

listTeachers = (req, res) => {
  teacherModel.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err));
}

createTeacher = (req, res) => {
  teacherModel.create(req.body)
    .then(newTeacher => res.json(newTeacher))
    .catch(err => res.status(500).send(err));
}

modifyTeacher = (req, res) => {
  const { id } = req.params;
  teacherModel.findByIdAndUpdate(id, req.body)
    .then(oldTeacher => res.status(200).json(oldTeacher))
    .catch(err => res.status(500).send(err));
}

deleteTeacher = (req, res) => {
  const { id } = req.params;
  teacherModel.findByIdAndDelete(id)
    .then(oldTeacher => {
      res.json(oldTeacher);
    })
    .catch(error => res.status(500).send(error));
}

module.exports = {
  listTeachers, createTeacher, modifyTeacher, deleteTeacher
}