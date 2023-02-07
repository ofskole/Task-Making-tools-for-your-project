import dictionary from "./dictionary.js";

const loadLanguages = (language) => {
    return dictionary[language];
};

export default loadLanguages;
