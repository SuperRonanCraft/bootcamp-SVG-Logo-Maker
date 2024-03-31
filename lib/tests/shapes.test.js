const { Shape } = require("../shape");
const { Triangle, Circle, Square, getShape } = require("../shapes");

describe("Shape", () => {
  it("should return a error when render() method is not overriden", () => {
    const shape = new Shape();
    expect(() => shape.render()).toThrow(
      new Error("Child should override this method")
    );
  });
  it("should return a class instance of Shape", () => {
    const shape = new Shape();
    expect(shape).toBeInstanceOf(Shape);
  });
  describe("getShape", () => {
    it("should return a Triangle class when 'shape=tringle'", () => {
      const shape = getShape({ shape: "triangle" });
      expect(shape).toBeInstanceOf(Triangle);
    });
    it("should return a Square class when 'shape=square'", () => {
      const shape = getShape({ shape: "square" });
      expect(shape).toBeInstanceOf(Square);
    });
    it("should return a Circle class when 'shape=circle'", () => {
      const shape = getShape({ shape: "circle" });
      expect(shape).toBeInstanceOf(Circle);
    });
    it("should return a Triangle tag when 'shape=triangle'", () => {
      const shape = getShape({ shape: "triangle" });
      expect(shape.render()).toContain('points="150,0 300,300 0,300"');
    });
    it("should return a shape with default color=blue", () => {
      const shape = getShape({ shape: "triangle" });
      expect(shape.render()).toContain(`style="fill:blue"`);
    });
  });
});

describe("Logo", () => {
  it("should return a Triangle svg tag with red text and blue shape tag", async () => {
    const shape = getShape({
      shape: "triangle",
      text: "SVG",
      color: "blue",
      textColor: "red",
    });
    const svg = shape.createShape();

    const expected = [
      `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"200\">`,
      `<polygon points=\"150,0 300,300 0,300\" style=\"fill:${shape.color}\" />`,
      `<text x=\"50%\" y=\"125\" text-anchor=\"middle\" font-size=\"80px\" fill=\"${shape.textColor}\">${shape.text}</text>`,
      `</svg>`,
    ].join("");
    // console.log(svg);
    expect(svg).toEqual(expected);
  });
});
