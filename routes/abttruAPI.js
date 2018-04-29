const router = require("express").Router();
const doctorController = require("../controllers/doctorController");
// const userController = require("../controllers/userController");

router.route("/abttru")
  .get(doctorController.findAll) // get all users
  .post(doctorController.create) // create a user

  // router.route("/doctor/form")
  // .get(doctorController.findAll) // get all users
  // .post(doctorController.create) // create a user

router.route("/abttru/:id")
  .get(doctorController.findById) // get a user by id
  .put(doctorController.update) // update a user by id
  .delete(doctorController.delete) // delete a user by id

module.exports = router;