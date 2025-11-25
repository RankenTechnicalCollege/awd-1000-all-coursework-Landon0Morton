"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Landon Morton
      Date: 11/25/25

      Filename: project05-01.js
*/

let timeId = "";

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");
let totalCorrect = 0;

startQuiz.addEventListener('click', function (){ 
   overlay.classList = 'showquiz';
   timeId = setInterval(countdown, 1000);
});

// Countdown Function
function countdown() {
   if (timeLeft === 0) {
      totalCorrect = checkAnswers();
      clearInterval(timeId);
      
      if (totalCorrect === correctAnswers.length) {
         window.alert("Congrats on getting 100%!");
         window.alert = function() {};
         overlay.classList = 'hidequiz';
      } else {
         let incorrect = correctAnswers.length - totalCorrect;
         window.alert("You got " + incorrect + "/" + correctAnswers.length + " wrong.");
         timeLeft = quizTime;
         quizClock.value = timeLeft;
         overlay.classList = 'hidequiz';
      }
   } else {
      timeLeft = timeLeft - 1;
      quizClock.value = timeLeft;
   }
};
// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands


// and the node list for questions
let questionList = document.querySelectorAll('div#quiz input');

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

