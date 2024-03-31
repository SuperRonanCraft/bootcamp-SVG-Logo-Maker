const { Shape } = require("../shape");
const { Triangle, Circle, Square } = require("../shapes");

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

describe("Shape", () => {
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
  });
});

describe("Logo", () => {
  describe("Triangle", () => {
    it("should return a Triangle svg tag", () => {
      const shape = getShape({ shape: "triangle" });
      expect(shape).toBeInstanceOf(Triangle);
    });
  });
});
