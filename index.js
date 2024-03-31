//Dependencies
const inquirer = require("inquirer");
const { getShape } = require("./lib/shapes");
const { createSvg } = require("./lib/svgGenerator");

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
      message: "Enter the COLOR you'd like your TEXT to be (hex or keyword):",
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
      message: "Enter the COLOR you'd like your SHAPE to be (hex or keyword):",
      name: "color",
    },
  ])
  // json data is accepted as user and logged to the console
  .then((answers) => {
    createSvg(getShape(answers));
  });
