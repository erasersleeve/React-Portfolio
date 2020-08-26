const router = require("express").Router();
const messageController = require("../../controllers/messageController");

// Matches with "/api/books"
router.route("/")
  .get(messageController.findAll)
  .post(messageController.create);


module.exports = router;
