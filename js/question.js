function Question(questionText , answerOptions , trueAnswer ) {
  this.questionText = questionText;
  this.answerOptions = answerOptions;
  this.trueAnswer = trueAnswer;
  this.checkAnswer
}


Question.prototype.checkAnswer = function(answer) {

  return answer === this.trueAnswer;


};


const questionlist = [

  new Question("1- Which one is Javascript package management app ?" , {a: "Node.js" , b: "TypeScript" , c: "Nuget" , d: "Npm"} , "d"),
  new Question("2- Which one cannot be considered part of front-end ?" , {a: "css" , b: "html" , c: "javascript" , d: "sql"},"d"),
  new Question("3- Which one is considered part of the back-end ?" , {a: "Node.js" , b: "TypeScript" , c: "angular" , d: "react"},"a"),
  new Question("4- Which one does not use the JavaScript programming language ?" , {a: "react" , b: "anuglar" , c: "vue.js" , d: "asp.net"},"d"),
];

