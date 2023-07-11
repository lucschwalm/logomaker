import inquirer from "inquirer";

inquirer.prompt([
    {
        type: 'input',
        name: 'initials',
        message: 'What brand initials would you like to use? (Up to 3 characters)',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use?',
        choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?',
    },
]).then((response) => {
    console.log(response);
});