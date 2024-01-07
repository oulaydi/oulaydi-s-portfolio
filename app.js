require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const connectDB = require("./server/config/db"); 

// Express app
const app = express();
// Port
const port = 5050;

// Connect to DB
connectDB();

// middleware & static files
app.use(express.static("public"));

// Template & MiddleWare
app.use(expressLayout);
app.set("layout", "./layouts/main");

// Registre view engine
app.set("view engine", "ejs");

app.use("/", require("./server/routes/main"));

app.listen(port);
