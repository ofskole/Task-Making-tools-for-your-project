const express = require("express");
const server = express();

const PORT = process.env.PORT || 8080;
server.set("port", PORT);

const languages = require("./modules/loadLanguage.js");

// middleware ---------------------------

server.use(express.static("public"));
server.use(express.json());

server.use(languages);

// general error handling -----------------------

server.use(function(err, req, res, next) {
    res.status(500).json({
        error :"Something went wrong.",
        descr: err
    }).end();
});


// start server ------------------------

server.listen(PORT, function () {
    console.log("Pingu is flying...");
});