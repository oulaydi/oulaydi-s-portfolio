const express = require("express");
const router = express.Router();

// Routes
router.get("/", (req, res) => {
    
    const local = {
        index: "Portfolio",
        title: "OuLaydi",
        descreption: "Hi, i am OULAYDI Oussama and i am going to talk about myself :3"
    }

    res.render("index", { local });
});

router.get("/about", (req, res) => {
    
    res.send("about");
});

// Export modules
module.exports = router;
