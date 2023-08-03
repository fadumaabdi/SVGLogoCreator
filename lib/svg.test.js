const { SVG, LogoText} = require('./svg.js');
const { Square} = require('./shapes.js');

test("should render a 300 x 200 SVG element", () => {
    const color = "red";
    const expectedSVG =
    '<svg version="1.1" width ="300" height ="200" xmnls="hhtps://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle fill="red">FMC</text></svg>'
const square = new Square(color);
const logoText = new LogoText("FMC", color);
const svg = new SVG(square, logoText);
expect(svg.render()).toEqual(expectedSVG);
});