function populate(){
    if(quiz.isEnded()) {
       //showScores();  
    } 
    else{
       //show question 
       var element = document.getElementById("question");
       element.innerHTML = quiz.getQuestionIndex().text;

       // show choices
       var choices = quiz.getQuestionIndex().choices;
       for(var i = 0; i< choices.length; i++) {
           var element = document.getElementById("choice" + i);
           element.innerHTML = choices [i];
           guess("btn" + i, choices[i]);
       }

       showProgress();
    }
};

function guess(id, guess){
     var button = document.getElementById(id); 
     button.onclick = function() {
          quiz.guess(guess);
          populate();
     }
};

function showProgress() {
     var currentQuestionNumber = quiz.questionIndex + 1;
     var element = document.getElementById("progress");
     element.innerHTML = " PERGUNTA " + currentQuestionNumber + " / " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>RESULTADO</h1>";
    gameOverHtml += "<h2 id='score'> Sua Pontuação: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

var questions = [
     new Question("_BACAXI", ["A", "I", "E", "O"], "A"),
     new Question("_SQUILO", ["I", "E", "U", "A"], "E"),
     new Question("_OGURTE", ["E", "U", "I", "O"], "I"),
     new Question("_LEFANTE", ["A", "U", "I", "E"], "E"),
     new Question("_LHO", ["U", "O", "E", "A"], "O")
];

var quiz = new Quiz(questions);

populate();
