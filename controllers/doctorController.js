const db = require("../models");
const bcrypt = require('bcrypt');

module.exports = {
  login: function (req, res) {
    console.log(req.body);
    console.log("YES");
    db.Doctor
      .findOne(
        { email: req.body.email },
        function (err, user) {
          if (err) throw err;
          if (user) {
            user.comparePassword(req.body.password, function (err, isMatch) {
              if (err) throw err;
              console.log("now here");
              req.session.user = user;
              res.json(user);
              console.log(req.body);
              console.log(req.session);
              
            })
          }
        })
      .catch(err => res.status(422).json(err))
  },
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findById: function (req, res) {
    // var populateQuery = [{path: 'recipes'}, {path: 'notes', select: 'body'}]
    db.Doctor
      .findById(req.params.id)
      .populate({
        path: 'patients',
        populate: { path: 'patients' },
        options: { sort: { 'last_name': 1 } }
      })
      .exec()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findPatientById: function (req, res) {
    // var populateQuery = [{path: 'recipes'}, {path: 'notes', select: 'body'}]
    db.User
      .findById(req.params.id)
      .populate({
        path: 'recipes',
        populate: { path: 'notes' }
      })
      .exec()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  createUser: function (req, res) {
    db.User
      .create(req.body)
      .then(dbUser => {
        console.log(dbUser);
        res.json(dbUser);
        return db.Doctor.findOneAndUpdate({ _id: dbUser.doctor_id }, { $push: { patients: dbUser } }, { upsert: true, new: true })
          .then(dbDoctor => {
            // If we were able to successfully update an Doctor, send it back to the client
            console.log(dbDoctor.map(x => x.recipes));
          })
      })
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  delete: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then((dbUser) => {
        console.log("deleted User");
        return db.Doctor.findByIdAndUpdate({ _id: dbUser.doctor_id }, { $pull: { patients: dbUser } })
      })
      .then(dbDoctor => {
        // If we were able to successfully update an Recipe, send it back to the client
        console.log(dbDoctor.map(x => x.notes));
      })
      // If an error occurred, send it to the client
      .catch((err) => { res.json(err); });
  }

}