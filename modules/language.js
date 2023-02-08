const express = require("express");
const router = express.Router();

const language = require("./loadLanguage.js");
const selectedLanguage = 'en';
const languageResources = language(selectedLanguage);

console.log(languageResources);
console.log(languageResources.Goodbye);

router.get("/languages", async function(req, res, next) {
    try {
        if (languageResources == null) {
            res.status(403).json({error: "Could not load the selected language."}).end();
            return;
        }
        res.status(200).json(languageResources).end();
    }
    catch (err) {
        next(err);
    }
});