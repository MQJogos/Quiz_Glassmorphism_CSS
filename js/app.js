function populate(){
    if(quiz.isEnded()){
       //showScores();  
    } 
    else{
       //show question 
       var element = document.getElementById("question");
       element.innerHTML = quiz.getQuestionIndex().text;

       // show choices
       var choices = quiz.getQuestionIndex().choices;
       for(var i = 0; i< choices.length; i++) {
           var element = document.getElementById("choice")
           // PAREI EM 32:04
       }
    }

}

var questions = [
     new Question("_BACAXI", ["A", "I", "E", "O"], "A"),
     new Question("_SQUILO", ["I", "E", "U", "A"], "E"),
     new Question("_OGURTE", ["E", "U", "I", "O"], "I"),
     new Question("_LEFANTE", ["A", "U", "I", "E"], "E"),
     new Question("_LHO", ["U", "O", "E", "A"], "O")
];

var quiz = new Quiz(questions);

populate();