const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes.js");

function writeSVG(fileName, data) {
    fs.appendFile(fileName, 
        `<svg version="1.1"
     width="300" height="300"
     xmlns="http://www.w3.org/2000/svg">
     ${data}
     </svg>`
        , (err) => {
        if(err) throw err;
    });
}

function responseHandler(response) {
    const chosenShape = response.shape;
    var shape;
    if(chosenShape === "Triangle"){
        shape = new shapes.Triangle;
    }else if(chosenShape === "Square"){
        shape = new shapes.Square;
    }else {
        shape = new shapes.Circle;
    }
    shape.setColor(response.shapeColor);
    writeSVG('output.svg', shape.render());
}

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
    responseHandler(response);
});