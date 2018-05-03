const router = require("express").Router();
const doctorController = require("../controllers/doctorController");
const recipeController = require("../controllers/recipeController");
const noteController = require("../controllers/noteController");

router.route("/abttru/")
  .get(doctorController.findAll) // get all users
  .post(doctorController.createUser) // create a user

router.route("/abttru/:id")
  .get(doctorController.findById) // get a user by id
  .put(doctorController.update) // update a user by id
  .delete(doctorController.delete) // delete a user by id

router.route("/abttru/recipes/:id")
  // .get(recipeController.findOne)
  .post(recipeController.createRecipe) // creates a recipe
  // .update(recipeController.updateRecipe) // updates recipe to join to user

router.route("/abttru/recipes/notes/:id")
  .post(noteController.createNote) //creates a note for a recipe
  .delete(noteController.deleteNote)

module.exports = router;