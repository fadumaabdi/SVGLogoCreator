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
