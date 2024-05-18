#! /usr/bin/env node
import inquirer from "inquirer";
import {differenceInSeconds} from "date-fns"
import chalk from "chalk";

const answer = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: chalk.green("please enter the amount of second"),
    validate: (input)=> {
      if (isNaN(input)) {
          return chalk.red("please enter a valid number.");
      }else if (input>60){
          return "Enter a amount less then or equal to 60.";
      }else{
      return true;
      }
      
  }
  });
  

let input = answer.userInput;

function startTime(val: number) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval(() => {
    const currentTime = new Date();
    const timeDifference = differenceInSeconds(intervalTime, currentTime);

    if (timeDifference <= 0) {
      console.log(chalk.red("Timer has expired"));
      process.exit()
    }

    const min = Math.floor((timeDifference % (3600 * 24)) / 3600);
    const sec = Math.floor(timeDifference % 60);
    console.log(chalk.yellow(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`));
   }, 1000);
}
startTime(input);

