var readlineSync = require("readline-sync")
const chalk = require('chalk');//used to add color and style

score = 0

var userinput = readlineSync.question("enter your name -- ")
console.log(chalk.blue.bgRed.bold("Welcome to the game " + userinput))
console.log(" ---------------   ")
console.log("PS-please answer in lower case ")
console.log(" ---------------   ")
console.log("Rules:")
console.log(" a) Each Correct answer carries 2 points")
console.log(" b) Each wrong answer will result in -1 points")
console.log(" ---------------   ")
console.log(" ---------------   ")
function play(question, answer) {
  var useranswer = readlineSync.question(question)
  

  if (useranswer == answer) {
    console.log(chalk.red.bgGreen.bold("YOU ARE RIGHT "));
    score = score + 2;


  }
  else {
    console.log(chalk.green.bgBlue.bold("YOU ARE WRONG "));
    console.log(" Correct answer is " + answer)
    score = score - 1;
  }

  console.log(chalk.red.bold("YOUR SCORE IS " + score))
console.log("     ")
}

// array of object
var data = [{  
  question: " how many states does india have  ",
  answer: "28"

},


{

  question: "who is the prime minister of the country ?  ",
answer: "narendra modi"
},

{
  question: "when did india become a independent nation (year)  ",
answer: "1947"


}, 

{

question : "INDIA is the ___  largest country ",
answer : "7"


}



];


for (var i=0;i<data.length;i++)
{

var example = data[i];

play(example.question,example.answer);


}


console.log(chalk.yellow.bold("HURRAY !!!!! YOUR TOTAL SCORE IS " + score + "/8"));



// play(" how many states does india have", "28")









// var readlineSync = require('readline-sync');
// var userName = readlineSync.question('May I have your name? ');


// var greet = "namaste" + '  ' + userName;
// console.log(greet);
