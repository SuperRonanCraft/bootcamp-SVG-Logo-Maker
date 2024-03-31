//Depends
const fs = require("fs");

//Create and save SVG logo file
function createSvg(shape) {
  const svgTxt = shape.createShape();
  fs.writeFile("../../examples/logo.svg", svgTxt, () => {
    console.log("Successfully Generated logo.svg!");
  });
}

module.exports = { createSvg };
