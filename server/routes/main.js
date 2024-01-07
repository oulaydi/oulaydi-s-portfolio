const controller = require("../controllers/controller");
const express = require("express");
const router = express.Router();

// Routes
router.get("/",controller.home);
router.get("/index");
router.get("/index.html", (req, res) => {
    res.redirect("/");
});
router.get("/index.ejs", (req, res) => {
    res.redirect("/");
});
router.get("/index", (req, res) => {
    res.redirect("/");
});
router.get("/home", (req, res) => {
    res.redirect("/");
});
router.get("/about",controller.about);
router.get("/contact",controller.contact);
router.use(controller.notFound);

// Export modules
module.exports = router;
