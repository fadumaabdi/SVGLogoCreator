const {Square, Triangle, Circle} = require('./shapes.js');

describe("Circle", () => {
    test("should render SVG for green circle", () => {
        const expectedSVG = '<circle cx="150" cy = "100" r = "80" fill="green" />';
        const circle = new Circle();
        circle.setColor("green");
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
    test("should accept fillcolour", () => {
        const expectedSVG = '<circle cx="150" cy = "100" r = "80" fill="blue"/>';
        const circle = new Circle();
        circle.setColor("blue");
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG)
    });
});

describe("Triangle", () => {
    test("should render SVG for brown polygon", () => {
        const expectedSVG = '<polygon points="150, 18 344, 182 56, 182" fill="brown" />';
        const triangle = new Triangle();
        triangle.setColor("brown");
        const actualSVG = triangle.render();
        expect(actualSvg).toEqual(expectedSVG);
    });
    test("should accept fillcolour", () => {
        const expectedSVG = '<polygon points="150, 18 344, 182 56, 182" fill="purple"/>';
        const triangle = new Triangle();
        triangle.setColor("purple");
        const actualSVG = triangle.render();
        expect(actualSVG).toEqual(expectedSVG)
    });
});

describe("Square", () => {
    test("should render SVG for black square", () => {
        const expectedSVG = '<rect x="90" y = "40" width = "120" height = "120" fill="black"/>';
        const square = new Square();
        square.setColor("brown");
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
    test("should accept fillcolour", () => {
        const expectedSVG = '<rect x="90" y = "40" width = "120" height = "120" fill="red" />';
        const square = new Square();
        square.setColor("red");
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedSVG)
    });
});
