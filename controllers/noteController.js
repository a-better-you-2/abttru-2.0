const db = require("../models");

module.exports = {
  createNote: (req, res) => {
    db.Note
      .create(req.body)
      .then(dbNote => {

        console.log(dbNote);
        console.log("adding note");
        res.json(dbNote);
        return db.Recipe.findOneAndUpdate({ _id: dbNote.recipe_id }, { $push: { notes: dbNote } }, { upsert: true, new: true })
      })
      .then(dbRecipe => {
        // If we were able to successfully update an Recipe, send it back to the client
        console.log(dbRecipe.map(x => x.notes));
      })
      .catch(err => res.status(422).json(err))
  },
  deleteNote: (req, res) => {
    db.Note
      .findOneAndRemove({ _id: req.params.id })
      .then((dbNote) => {
        console.log("deleted note");
        return db.Recipe.findByIdAndUpdate({ _id: dbNote.recipe_id }, { $pull: { notes: dbNote._id } }, { new: true })
          .then(dbRecipe => {
            // If we were able to successfully update an Recipe, send it back to the client
            console.log(dbRecipe.map(x => x.notes));
          })
      })
      // If an error occurred, send it to the client
      .catch((err) => { res.json(err); });
  }
}