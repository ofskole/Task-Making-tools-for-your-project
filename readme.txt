Language module for "Making tools for your project".

This is a node.js module that returns the data of a specific language in json fromat.



Installation

npm install https://github.com/ofskole/Task-Making-tools-for-your-project.git



Usage

const getLanguageData = require("./languageModule/dictionary.js");

const languageData = getLanguageData("english"); / let data = await getLanguageData(language);

console.log(languageData);


The package currently support english, norwegian and swedish. To add more languages, simply add a json file in the languageModule/language folder with the same name as the language.
Button id, language const, etc should be the same as the name of the json file, for example "english" as button id and "english.json" as file name.

To add more content to your language, simply store it in the json file in the same way the other content is stored.