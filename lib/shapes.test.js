const {Square, Triangle, Circle} = require("./shapes");

describe("Circle", () => {
    test("should render SVG for green circle", () => {
        const expectedSvg = '<circle cx="150" cy = "100" r = "80" fill="green" />';
        const circle = new Circle();
        circle.setColor("green");
        const actualSvg = circle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
    test("should accept fillcolour", () => {
        const expectedSvg = '<circle cx="150" cy = "100" r = "80" fill="blue"/>';
        const circle = new Circle();
        circle.setColor("blue");
        const actualSvg = circle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg)
    });
});

describe("Triangle", () => {
    test("should render SVG for brown polygon", () => {
        const expectedSvg = '<polygon points="150, 18 344, 182 56, 182" fill="brown" />';
        const triangle = new Triangle();
        triangle.setColor("brown");
        const actualSvg = triangle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
    test("should accept fillcolour", () => {
        const expectedSvg = '<polygon points="150, 18 344, 182 56, 182" fill="purple"/>';
        const triangle = new Triangle();
        triangle.setColor("purple");
        const actualSvg = triangle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg)
    });
});

describe("Square", () => {
    test("should render SVG for black square", () => {
        const expectedSvg = '<rect x="90" y = "40" width = "120" height = "120" fill="black"/>';
        const square = new Square();
        square.setColor("brown");
        const actualSvg = square.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
    test("should accept fillcolour", () => {
        const expectedSvg = '<rect x="90" y = "40" width = "120" height = "120" fill="red"/>';
        const square = new Square();
        square.setColor("red");
        const actualSvg = square.render();
        expectedSvg(actualSvg).toEqual(expectedSvg)
    });
});
