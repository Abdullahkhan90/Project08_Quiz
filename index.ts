#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Quiz");
console.log("Each Question is of 10 marks\n");

let marks: number = 0;

let userInput = await inquirer.prompt([
  {
    type: 'list',
    name: 'question1',
    message: "1. Which is the largest ocean in the world?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"]
  },
  {
    type: 'list',
    name: 'question2',
    message: '2. How many bones are there in the human body?',
    choices: [206, 210, 200, 220]
  },
  {
    type: 'list',
    name: 'question3',
    message: '3. Who is the author of "The Great Gatsby"?',
    choices: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "Charles Dickens"]
  },
  {
    type: 'list',
    name: 'question4',
    message: '4. Which country is known as the Land of the Rising Sun?',
    choices: ["China", "Japan", "India", "South Korea"],
  },
  {
    type: 'list',
    name: 'question5',
    message: '5. What is the chemical symbol for gold?',
    choices: ["Au", "Ag", "Fe", "Pb"]
  },
  {
    type: 'list',
    name: 'question6',
    message: '6. What is the boiling point of water in Celsius?',
    choices: [100, 0, 50, 200]
  },
  {
    type: 'list',
    name: 'question7',
    message: '7. Who painted the Mona Lisa?',
    choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"]
  },
  {
    type: 'list',
    name: 'question8',
    message: '8. What is the currency of Brazil?',
    choices: ["Peso", "Euro", "Dollar", "Real"]
  },
  {
    type: 'list',
    name: 'question9',
    message: '9. Which planet is known as the Red Planet?',
    choices: ["Mars", "Venus", "Jupiter", "Saturn"],
  },
  {
    type: 'list',
    name: 'question10',
    message: '10. Who wrote "Pride and Prejudice"?',
    choices: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Agatha Christie"]
  }
]);

const {question1, question2, question3, question4, question5, question6, question7, question8, question9, question10} = userInput;

let correctOptions = ["Pacific Ocean", 206, "F. Scott Fitzgerald", "Japan", "Au", 100, "Leonardo da Vinci", "Real", "Mars", "Jane Austen"];

if(question1 === "Pacific Ocean") marks += 10;
if(question2 === 206) marks += 10;
if(question3 === "F. Scott Fitzgerald") marks += 10;
if(question4 === "Japan") marks += 10;
if(question5 === "Au") marks += 10;
if(question6 === 100) marks += 10;
if(question7 === "Leonardo da Vinci") marks += 10;
if(question8 === "Real") marks += 10;
if(question9 === "Mars") marks += 10;
if(question10 === "Jane Austen") marks += 10;

console.log(marks);

function myAnswers(){
  console.log(`\nCorrect Options:`, correctOptions);

  if(marks === 100){
    console.log(`\nCongratulations! You got full ${marks} marks`);
  } else if(marks > 0){
    console.log(`\nYou got ${marks} marks, out of 100`);
  } else{
    console.log(`\nUnfortunately! You got ${marks} marks out of 100`);
  }
}

myAnswers();