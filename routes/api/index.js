const router = require("express").Router();
const articleRoutes = require("./article");
const nytRoutes = require("./nyt")
// Book routes
router.use("/article", articleRoutes);
router.use("/nytRoutes", nytRoutes);

module.exports = router;
