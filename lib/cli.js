const inquirer = require("inquirer");
const {writeFile} = require("fs/promises");
const { Circle, Triangle, Square} = require("./shapes");
const questions = require("./questions");
const {LogoText, SVG} = require("./svg");

