const inquirer = require('inquirer');
const fs = require('fs');



inquirer
.prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is your team name?',
    },
])
.then((data) => {
    const filename = `index.html`;

    fs.writeFile(filename, writeToFile(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
});




let writeToFile = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1> Hi my name is ${data.title} </h1>


    </body>
    </html>`

}
