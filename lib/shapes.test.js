const { Triangle, Square, Circle } = require("./shapes.js");

// test for triangle with a red background to render
describe("Triangle test", () => {
  test("test for a triangle with a red background", () => {
    const shape = new Triangle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
    );
  });
});

// test for square with a purple background to render
describe("Square test", () => {
  test("test for a square with a purple background", () => {
    const shape = new Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="purple" />'
    );
  });
});

// test for circle #AF38EB background to render
describe("Circle test", () => {
  test("test for a circle with a #AF38EB background", () => {
    const shape = new Circle();
    shape.setColor("#AF38EB");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#AF38EB" />'
    );
  });
});