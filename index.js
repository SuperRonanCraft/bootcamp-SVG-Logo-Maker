// const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

//Get back a shape object
function getShape(shapeText, { text, color, textColor }) {
  switch (shapeText) {
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
