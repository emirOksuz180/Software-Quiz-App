const questionlist = [
  new Question("1- Which one is Javascript package management app ?" , {a: "Node.js" , b: "TypeScript" , c: "Nuget" , d: "Npm"} , "d"),
  new Question("2- Which one cannot be considered part of front-end ?" , {a: "css" , b: "html" , c: "javascript" , d: "sql"},"d"),
  new Question("3- Which one is considered part of the back-end ?" , {a: "Node.js" , b: "TypeScript" , c: "angular" , d: "react"},"a"),
  new Question("4- Which one does not use the JavaScript programming language ?" , {a: "react" , b: "anuglar" , c: "vue.js" , d: "asp.net"},"d"),
];


const quiz = new Quiz(questionlist);
const ui = new UI();

console.log(quiz);

document.getElementById("btnGetQuestion").addEventListener("click" , function() {

  if(quiz.questions.length != quiz.questionIndex) {

    ui.showQuestion(quiz.getQuestions());
    quiz.questionIndex += 1;

  } else {

    console.log("quiz is done");

  }
  

});
