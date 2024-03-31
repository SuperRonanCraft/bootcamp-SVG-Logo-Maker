const { Shape } = require("./shape");

class Triangle extends Shape {
  render() {
    return `<polygon points="150,0 300,300 0,300" style="fill:${this.color}" />`;
  }
}
class Circle extends Shape {
  render() {
    return `<circle r="100" cx="150" cy="100" fill="${this.color}" />`;
  }
}
class Square extends Shape {
  render() {
    return `<rect x="50" width="200" height="200" fill="${this.color}" />`;
  }
}

//Get back a shape object
function getShape({ shape, text = "", textColor = "red", color = "blue" }) {
  switch (shape.toLowerCase()) {
    case "square":
      return new Square(text, color, textColor);
    case "circle":
      return new Circle(text, color, textColor);
    case "triangle":
      return new Triangle(text, color, textColor);
  }
}

module.exports = { Triangle, Circle, Square, getShape };
