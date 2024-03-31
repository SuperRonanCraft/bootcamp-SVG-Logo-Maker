const { Shape } = require("./shape");

class Triangle extends Shape {
  render() {
    return `<polygon points="100,0 200,200 0,200" style="fill:${this.color}" />`;
  }
}
class Circle extends Shape {
  render() {
    return `<circle r="100" cx="100" cy="100" fill="${this.color}" />`;
  }
}
class Square extends Shape {
  render() {
    return `<rect width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
