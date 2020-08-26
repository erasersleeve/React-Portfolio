const router = require("express").Router();
const messageRoutes = require("./message");

// Book routes
router.use("/message", messageRoutes);

module.exports = router;
