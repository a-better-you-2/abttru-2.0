const db = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
  login: function(req, res, next) {
    db.User.findOne({ email: req.body.email }, function(err, user) {
      if (err) throw err;
      if (user) {
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (err) throw err;
          req.session.user = user;
          res.json(user);
        });
      }
    }).catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.User.findById(req.params.id)
      .populate({
        path: 'recipes',
        populate: { path: 'notes' },
        options: { sort: { recipe_name: 1 } },
      })
      .exec()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deletePatient: function(req, res) {
    db.User.findOneAndRemove({ _id: req.params.id }).then(dbUser => {
      return db.Doctor.findByIdAndUpdate(
        { _id: dbUser.doctor_id },
        { $pull: { patients: dbUser._id } },
        { new: true },
      ).catch(err => {
        res.json(err);
      });
    });
  },
};
