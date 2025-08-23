function Question(questionText , answerOptions , trueAnswer ) {
  this.questionText = questionText;
  this.answerOptions = answerOptions;
  this.trueAnswer = trueAnswer;
  this.checkAnswer
}


Question.prototype.checkAnswer = function(answer) {

  return answer === this.trueAnswer;


};




