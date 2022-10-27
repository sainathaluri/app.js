var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
console.log(chalk.bold.yellowBright('Welcome To World cup 2011 Quiz Game'));
console.log(chalk.bold.yellowBright("------------------------------------"));
var username = readlineSync.question("Please enter your name: ")
console.log("Welcome " + chalk.yellowBright(username))

var quizArr = [
{
  question:'Who is the caption of india in 2011 WC? \na. Dhoni \nb. Kohli \nc. Yuvaraj\n',
  answer:'a'
},
{
  question: "Who won 2011 World cup? \na. India \nb. Srilanka \nc. Austrialia \n",
  answer: "a",
},
{
  question:'Which country played oppent to india in final? \na. Pakistan \nb. China \nc. Srilanka \n',
  answer:'c',
},
{
  question:'How many rus did Gambir scored in final match?  \na. 97 \nb. 55 \nc. 200 \n',
  answer:'a',
},
{
  question:"Who is vice caption of india in 2011 worldcup? \na.Virender Sehwag \nb.Yuvaraj \nc.Sachin \n" ,
  answer:"a"

},
];

function play(question,answer){
  var userAnswer=readlineSync.question(chalk.bold(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score++;
    console.log(chalk.green("Correct Answer !"));
    console.log(chalk.bold("Score is " + score));
  }
  else{
    console.log(chalk.red("Oops you missed it"));
    console.log(chalk.bold("Score is " + score));
  }
  console.log("-------------")


}

for(i=0;i<quizArr.length;i++){
  currentQues = quizArr[i].question;
  currentAns = quizArr[i].answer;
  play(currentQues,currentAns);
}

console.log(chalk.greenBright('Yaay!!!! you scored ' + score + ' in Crickat World cup 2011 Quiz Game' ));