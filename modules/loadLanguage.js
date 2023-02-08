let dictionary = require ("./dictionary.js");

const loadLanguages = (language) => {
    return dictionary[language];
};

module.exports = loadLanguages;
