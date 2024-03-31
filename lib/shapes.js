const { Shape } = require("./shape");

class Triangle extends Shape {
  render() {
    return `
        <polygon points="100,0 200,200 0,200" style="fill:${this.color}" />`;
  }
}

module.exports = { Triangle };
