const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

function promptUser() {
    return inquirer
    .prompt([
      {
        type: 'list',
        name: 'shape',
        message: 'what shape do you like for your logo:',
        choices: ['Circle', 'Triangle', 'Square'],
      },
      
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like it for your shape? (Enter a color keyword OR a hexadecimal number) ',
      },
     
     
      {
        type: 'input',
        name: 'text',
        message: 'Please, Enter the text for your logo here  ( 3 characters) ',
      },
     
     
      {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like it for your TEXT ? (Enter a color keyword OR a hexadecimal number) ',
      },
    ])
        .then((answers) => {
         writeSvgFile(answers);
    });
}

function writeSvgFile(answers) {
  let shape;
  let textX = 150;
  
    if (answers.shape === 'Circle') {
    shape = new Circle(50); 
    textX = 25 + shape.radius;
     
  } else if (answers.shape === 'Triangle') {
    shape = new Triangle(100, 100);
    
    textX = 150;
    
  } else {
    shape = new Square(100); 
    textX = 150 - shape.sideLength / 2;
  }

  shape.setColor(answers.shapeColor);

  const svgCode = `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height="200" width="300">
   
  ${shape.render()}
            <text x="150" y="125" font-size="55" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  </svg>`;

  fs.writeFile('logo.svg', svgCode, (err) =>
   
  
  err ? console.error(' check Error SVG file:', err) : console.log('Generated logo.svg')
  );
}

promptUser();
