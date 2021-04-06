const inquirer = require("inquirer");
// //requires a file system 
// const fs = require('fs');
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(name,github)

// //fs files require three arguments name of file, data, and callback function
// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
    .prompt([
        {
            type:'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));