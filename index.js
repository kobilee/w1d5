var chalk = require("chalk");

var message = chalk.blue.bgRed.bold("Hello") + chalk.yellow(" World");
console.log(message);