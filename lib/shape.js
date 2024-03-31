class Shape {
  constructor(text, color, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    throw new Error("Child should override this method");
  }

  renderText() {
    return `<text x="50%" y="122" text-anchor="middle" font-size="90px" fill="${this.textColor}">${this.text}</text>`;
  }

  createShape() {
    let str = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">`;
    str = str.concat(this.render(), this.renderText());
    str += "</svg>";
    return str;
  }
}

module.exports = { Shape };
