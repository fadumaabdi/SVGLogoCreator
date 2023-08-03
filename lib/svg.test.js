const { SVG, LogoText} = require("./svg");
const { Square} = require("./shapes");

test("should render a 300 x 200 SVG element", () => {
    constcolor = "red";
    const expectedSVG =
    '<svg version="1.1" width ="300" height ="200" xmnls="hhtps://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle fill="red"></text></svg>'
const square = new Square(color);
const logoText = new LogoText("FMC", color);
const svg = new SVG(square, logoText);
expecr(svg.render()).toEqual(expectedSVG);
});