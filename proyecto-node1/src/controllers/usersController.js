const userModel = require('../database/user');

listUsers = (req, res) => {
  console.log(req.params);
  userModel.find().then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

createUser = (req, res) => {
  console.log(req.params, req.body, req.headers);
  userModel.create(req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

getUser = (req, res) => {
  console.log(req.params);
  userModel.find({ _id: req.params.id }).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

modifyUser = (req, res) => {
  console.log(req.params, req.body, req.headers);
  userModel.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

deleteUser = (req, res) => {
  console.log(req.params);
  userModel.findByIdAndDelete(req.params.id).then(data => {
    res.json(data);
  }).catch(err => {
    res.send(err);
  });
}

module.exports = {
  listUsers, createUser, getUser, modifyUser, deleteUser
}