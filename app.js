
//requires a file system 
const fs = require('fs');
const generatePage = require("./src/page-template.js");
//holds user command line arguments 
const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const pageHTML = generatePage(name,github)

//fs files require three arguments name of file, data, and callback function
fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});