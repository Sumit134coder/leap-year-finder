var readlineSync = require('readline-sync');
var chalk = require('chalk');
console.log(chalk.bold.red("WELCOME TO LEAPYEAR FINDER"));

var BirthYear = readlineSync.question(chalk.bold.yellow("Enter your birth year "));

if(BirthYear%4==0)
{
  console.log(chalk.bold.green("your were born in leap year"))
}
else
{
  console.log(chalk.bold.red("you were not born in leap year"))
}