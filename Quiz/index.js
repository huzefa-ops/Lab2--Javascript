//Create prototype for questions 

//prototype of Quiz
function Quiz(questions){
    this.questions=questions;
    this.questionIndex=0;
    this.score=0;
}



//funtion for returning question one by one from question from array
Quiz.prototype.getQuestionByIndex= function(){
    return this.question[this.questionIndex];
}


//to check end of quiz
Quiz.prototype.isEnded= function(){
    return this.questionIndex===this.questions.length;
}

Quiz.prototype.checkOptionWithAnswer=function(answer){
    if(this.getQuestionByIndex().isCorrectAnswer(answer)){
    this.score++;
    }
    this.questionIndex++;

}
function Question(text , choices , answer){
    this.text= text;
    this.choices=choices;
    this.answer=answer;
}

//function to check the correct answer
Question.prototype.isCorrectAnswer=function(answer){
    return this.answer===answer;
}

//question are here
var questions=[
    new Question("Javascript supports?",["HTML", "Functions" , "CSS" , "XHML"],"Funstions"), 
    new Question("Which language is used for styling web pages?",["HTML", "JQuery" , "CSS" , "XML"],"CSS"),
    new Question("Which is not Javascript framework?",["Django", "Reactjs" , "JQuery" , "Python Script"],"Django"),
    new Question("Which is used to connect to the database?",["Java","HTML","CSS","JS"],"Java"),
    new Question("JavaScript is a ",["Language","Programming Language","Development","All"],"Programming Language")
];








//create quiz
var quiz = new Quiz(questions);

//display quiz
loadQuestions();

//load question from HTML
function loadQuestions(){
    if(quiz.isEnded()){
        showScore();
    }
    else
    {
        //show Question
        document.getElementById("question").innerHTML= quiz.getQuestionByIndex().text;

        //show options
        var choices= quiz.getQuestionByIndex().choices;
        for(var i=0; i<choices.length;i++){
            var element= document.getElementById("choice"+i)
            element.innerHTML=choices[i];
            handleOptionButton("btn"+i,choices[i])
        }
        //show progress
        showProgress();

    }
}
//calculate the score
function showScore(){
    var gameOverHTML="<h1>Result</h1>"
    gameOverHTML +="<h2 id'score' "+ quiz.score + ".And mark percentage is: " +(quiz.score/questions.length*100)+"%"+"</h2>"
    document.getElementById("quiz").innerHTML=gameOverHTML;
}

//handle click event on the button to check correct answer and display score
function handleOptionButton(id,choice){
    var button= document.getElementById(id);
    button.onclick=function(){
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }
}

//show no of questions
function showProgress(){
    var currentQuestionNumber= quiz.questionIndex+1;
    document.getElementById("progress").innerHTML= "Question"+ currentQuestionNumber+ " of "+ quiz.questions.length 
}