const questionlist = [
  new Question("1- Which one is Javascript package management app ?" , {a: "Node.js" , b: "TypeScript" , c: "Nuget" , d: "Npm"} , "d"),
  new Question("2- Which one cannot be considered part of front-end ?" , {a: "css" , b: "html" , c: "javascript" , d: "sql"},"d"),
  new Question("3- Which one is considered part of the back-end ?" , {a: "Node.js" , b: "TypeScript" , c: "angular" , d: "react"},"a"),
  new Question("4- Which one does not use the JavaScript programming language ?" , {a: "react" , b: "anuglar" , c: "vue.js" , d: "asp.net"},"d"),
];


const quiz = new Quiz(questionlist);
const ui = new UI();


ui.btnStart.addEventListener("click" , function() {

  startTimer(10);
  startTimerLine();
  ui.quizBox.classList.add("active");
  ui.buttonBox.classList.remove("active");
  ui.showQuestion(quiz.getQuestions());
  ui.showQuestionCount(quiz.questionIndex + 1 , quiz.questions.length);
  ui.btnNext.classList.remove("show");
});

console.log(quiz);

ui.btnNext.addEventListener("click" , function() {

  if(quiz.questions.length != quiz.questionIndex) {
    startTimer(10);
    startTimerLine();
    ui.showQuestion(quiz.getQuestions());
    ui.showQuestionCount(quiz.questionIndex + 1 , quiz.questions.length);
    ui.btnNext.classList.remove("show");
    

  } else {

    ui.scoreBox.classList.add("active");
    ui.quizBox.classList.remove("active");
    ui.showScore(quiz.trueAnswerCount , quiz.questions.length)

  }
  

});



function optionSelected(e) {

  clearInterval(counter);
  clearInterval(counterLine);
  const answer = e.target.textContent[0];
  const question = quiz.getQuestions();


  let selectedElement = e.target;
  
  if(selectedElement.nodeName == "SPAN") {
    selectedElement = selectedElement.parentElement;
  }

  if(question.checkAnswer(answer)) {

    quiz.trueAnswerCount += 1;
    selectedElement.classList.add("correct");
    selectedElement.insertAdjacentHTML("beforeend" , ui.correctIcon);

  } else {
    selectedElement.classList.add("incorrect");
    selectedElement.insertAdjacentHTML("beforeend" , ui.inCorrectIcon);
  }

  quiz.questionIndex += 1;
  ui.disableAllOption();
  ui.btnNext.classList.add("show");

}

ui.btnQuit.addEventListener("click" , function() {

  window.location.reload();


});


ui.btnReplay.addEventListener("click" , function() {

  quiz.questionIndex = 0;
  quiz.trueAnswerCount = 0;

  ui.btnStart.click();
  ui.scoreBox.classList.remove("active"); 




});

let counter;

function startTimer(time) {

  counter = setInterval(timer , 1000);

  function timer() {

    ui.timeSecond.textContent = time;
    time--;

    if(time < 0) {

      clearInterval(counter);
      ui.timeText.textContent = "Time is up !";
      ui.disableAllOption();
      quiz.questionIndex += 1;

      ui.btnNext.classList.add("show");
     

    }

  }

}

let counterLine;  

function startTimerLine() {

  let line_width = 0;

  counterLine = setInterval(timer , 20);


  function timer() {

    line_width += 1;

    ui.timeLine.style.width = line_width + "px";

    if(line_width > 549) {
      clearInterval(counterLine);
    }

  }

}



