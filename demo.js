import loadLanguage from './loadLanguages.js';

const selectedLanguage = 'en';
const languageResources = loadLanguage(selectedLanguage);

console.log(languageResources);
console.log(languageResources.Goodbye);