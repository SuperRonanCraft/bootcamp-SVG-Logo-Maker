const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

//Functions
//Get back a shape object
function getShape({ text, textColor, shape, color }) {
  switch (shape.toLowerCase()) {
    case "square":
      return new Square(text, color, textColor);
    case "circle":
      return new Circle(text, color, textColor);
    case "triangle":
      return new Triangle(text, color, textColor);
  }
}

//Create and save SVG logo file
function createSvg(shape) {
  const svgTxt = shape.createShape();
  fs.writeFile("./examples/logo.svg", svgTxt, () => {
    console.log("File created!");
  });
}

//User Interactions
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your main images Letters:",
      name: "text",
      validate: (input) => {
        if (input.length <= 3) return true;
        return new Error("Please enter 3 or less characters!");
      },
    },
    {
      type: "input",
      message: "Enter the color you'd like your TEXT to be (hex or keyword):",
      name: "textColor",
    },
    {
      type: "list",
      message: "Please choose your logos shape:",
      name: "shape",
      choices: ["Square", "Triangle", "Circle"],
    },
    {
      type: "input",
      message: "Enter the color you'd like your SHAPE to be (hex or keyword):",
      name: "color",
    },
  ])
  // json data is accepted as user and logged to the console
  .then((answers) => {
    createSvg(getShape(answers));
  });
