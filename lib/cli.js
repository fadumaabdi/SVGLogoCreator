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

   

    }


