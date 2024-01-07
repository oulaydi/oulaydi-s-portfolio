const Education = require("../models/addEducation");
const Experience = require("../models/addExperience");

// home
const home = async (req, res) => {
    const local = {
        index: "Portfolio",
        title: "OuLaydi",
        descreption:
            "Hi, i am OULAYDI Oussama and i am going to talk about myself :3",
    };

    try {
        const data = await Education.find();
        const data2 = await Experience.find();
        res.render("index", { local, data, data2 });
    } catch (error) {
        console.log(error);
    }
};

// about
const about = (req, res) => {
    const local = {
        index: "About Me",
        title: "OuLaydi",
        descreption:
            "Hi, i am OULAYDI Oussama and i am going to talk about myself deeply hh :3",
    };

    res.render("about", { local });
};

// contact
const contact = (req, res) => {
    const local = {
        index: "Contact Me",
        title: "OuLaydi",
        descreption:
            "Hi, i am OULAYDI Oussama and i am going to let talk with me across something hh :3",
    };

    res.render("contact", { local });
};

// 404
const notFound = (req, res) => {
    const local = {
        index: "Not Found",
        title: "Page",
        descreption:
            "Hi, i am OULAYDI Oussama and i am going to talk about myself deeply hh :3",
    };

    res.render("404", { local });
};

module.exports = {
    home,
    about,
    contact,
    notFound,
};
