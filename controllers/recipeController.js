const db = require("../models");

module.exports = {
  createRecipe: function (req, res) {
    db.Recipe
      .create(req.body)
      .then(dbRecipe => {
          res.json(dbRecipe);
          return db.User.findOneAndUpdate({ _id: dbRecipe.user_id }, { $push: { recipes: dbRecipe } }, { upsert: true, new: true })})
      .then(dbUser => {
        // If we were able to successfully update an User, send it back to the client
        console.log(dbUser.map(x => x.recipes));
        // res.redirect("/user");
    })
      .catch(err => res.status(422).json(err))
  },
  deleteRecipe: function (req, res) {
    db.Recipe
      .findOneAndRemove({_id: req.params.id})
      .then((dbRecipe) => {
      console.log("deleted recipe");
      return db.User.findByIdAndUpdate({ _id: dbRecipe.user_id}, {$pull: {recipes: dbRecipe}})
      .then(dbUser => {
        // If we were able to successfully update an Recipe, send it back to the client
        console.log(dbUser.map(x => x.notes));
      })
    })
     // If an error occurred, send it to the client
    .catch((err) => {res.json(err);});
  },
  updateRecipe: function (req, res) {
    db.Recipe
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }

}