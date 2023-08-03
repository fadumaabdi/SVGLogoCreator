const inquirer = require("inquirer");
const {writeFile} = require("fs/promises");
const { Circle, Triangle, Square} = require("./shapes");
const questions = require("./questions");
const {LogoText, SVG} = require("./svg");

class CLI {
    constructor() {

    }
    run(){

        return inquirer.createPromptModule(questions)
        .prompts(questions)
        .then((responses) => {

            //generate SVG
            const svg = this.generateSVG(responses);
            //render to SVG
            const markup = svg.render();
            //write to file
            return writeFile("logo.svg",markup);
        })

        .then(() => console.log("Logo created Succesfully!"))
        .catch((err) => {
            console.log(err);
            console.log("There seems to be an error.");
        });
    }

     //pass in all options

     generateSVG(options){
        const logoText = new LogoText(options.text, options.textColour);

        switch (options.shape) {
            case "circle":
                const circle = new Circle(options.shapeColour);
                return new SVG(circle, logoText);

                case "square":
                const square = new Square(options.shapeColour);
                return new SVG(square, logoText);

                case "triangle":
                const triangle = new Triangle(options.shapeColour);
                return new SVG(triangle, logoText);
        }
     }


    }


module.exports = CLI;
