//declared my variables globally so they are available to all functions that need them
//these variables allow the JS to access the html elements
var start = document.querySelector("#start")

var intro = document.querySelector("#intro")
var Q1 = document.querySelector("#Q1")
var Q2 = document.querySelector("#Q2")
var Q3 = document.querySelector("#Q3")
var Q4 = document.querySelector("#Q4")
var Q5 = document.querySelector("#Q5")
var endPage = document.querySelector("#endPage")

var score = document.querySelector("#score")
var submitScore = document.querySelector("#submitScore")
var initialsInput = document.querySelector("#yourInitials")

var timeEl = document.querySelector("#time")
var secondsLeft = 75;
var timerInterval = ''

var hsPage = document.querySelector("#high-scores");
var viewhs = document.querySelector("#viewhs");

var highScores = [];
var newScore = {
    score: 0,
    initials: ''
}
var storedHS = [];

var hsList = document.querySelector("#hsList");

var backBTN = document.querySelector("#back")

//this function starts the timer when it is called -- tells the secondsLeft variable to decrease by 1 each second and assigns the text content for the timeEl
//the if statement makes the timer stop and calls the showendPage function if the user runs out of time on their quiz
function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            showendPage ();
        }
    }, 1000);

}



function showQ1() {
    intro.style.display = "none";
    Q1.style.display = "block";
}

function showQ2() {
    Q1.style.display = "none";
    Q2.style.display = "block";
}

function showQ3() {
    Q2.style.display = "none";
    Q3.style.display = "block";
}

function showQ4() {
    Q3.style.display = "none";
    Q4.style.display = "block";
}

function showQ5() {
    Q4.style.display = "none";
    Q5.style.display = "block";
}

//Q1

var correctansq1 = document.querySelector("#correctQ1");
var incorrectans0q1 = document.querySelector("#incorrect0Q1")
var incorrectans1q1 = document.querySelector("#incorrect1Q1")
var incorrectans2q1 = document.querySelector("#incorrect2Q1")

//Q2

var correctansq2 = document.querySelector("#correctQ2");
var incorrectans0q2 = document.querySelector("#incorrect0Q2")
var incorrectans1q2 = document.querySelector("#incorrect1Q2")
var incorrectans2q2 = document.querySelector("#incorrect2Q2")

//Q3

var correctansq3 = document.querySelector("#correctQ3");
var incorrectans0q3 = document.querySelector("#incorrect0Q3")
var incorrectans1q3 = document.querySelector("#incorrect1Q3")
var incorrectans2q3 = document.querySelector("#incorrect2Q3")

//Q4

var correctansq4 = document.querySelector("#correctQ4");
var incorrectans0q4 = document.querySelector("#incorrect0Q4")
var incorrectans1q4 = document.querySelector("#incorrect1Q4")
var incorrectans2q4 = document.querySelector("#incorrect2Q4")

//Q5

var correctansq5 = document.querySelector("#correctQ5");
var incorrectans0q5 = document.querySelector("#incorrect0Q5")
var incorrectans1q5 = document.querySelector("#incorrect1Q5")
var incorrectans2q5 = document.querySelector("#incorrect2Q5")
