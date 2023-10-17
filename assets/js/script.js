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

start.addEventListener("click", function(){
    setTime();
    showQ1();
})

function showIntro() {
    hsPage.style.display = "none";
    prevQincorrect.style.display= "none";
    prevQcorrect.style.display = "none";
    intro.style.display = "block";
    secondsLeft = 75;
    timeEl.textContent = "Time: " + secondsLeft;
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

function showhs() {
    hsPage.style.display = "block";
    endPage.style.display = "none";
    intro.style.display = "none";
    prevQincorrect.style.display= "none";
    prevQcorrect.style.display = "none";
}

function incorrectMessage() {
    secondsLeft = secondsLeft -10;
    prevQincorrect.style.display= "block";
    prevQcorrect.style.display = "none";
}

function correctMessage() {
    prevQcorrect.style.display= "block";
    prevQincorrect.style.display = "none";
}


function showendPage() {
    Q1.style.display = "none";
    Q2.style.display = "none";
    Q3.style.display = "none";
    Q4.style.display = "none";
    Q5.style.display = "none";
    endPage.style.display = "block";
    clearInterval(timerInterval);
    score.textContent = "Your final score is " + secondsLeft + "!";
}

function submitNewScore() {
    highScores.push(newScore);
    console.log(highScores)
}

function storeHS() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
    storedHS = JSON.parse(localStorage.getItem("highScores"));
    console.log(storedHS)
}

function updateHS() {
    hsList.innerHTML = "";
    for (var i = 0; i < highScores.length; i++) {
        newScore = highScores[i];
    
        var li = document.createElement("li");
        li.textContent = newScore.initials + ": " + newScore.score;
        li.setAttribute("data-index", i);
    
        hsList.appendChild(li);
      }
}


//Q1

var correctansq1 = document.querySelector("#correctQ1");
var incorrectans0q1 = document.querySelector("#incorrect0Q1")
var incorrectans1q1 = document.querySelector("#incorrect1Q1")
var incorrectans2q1 = document.querySelector("#incorrect2Q1")

correctansq1.addEventListener("click", function() {
    showQ2();
    correctMessage();
})

incorrectans0q1.addEventListener("click", function() {
    showQ2();
    incorrectMessage();
})

incorrectans1q1.addEventListener("click", function() {
    showQ2();
    incorrectMessage();
})

incorrectans2q1.addEventListener("click", function() {
    showQ2();
    incorrectMessage();
})

//Q2

var correctansq2 = document.querySelector("#correctQ2");
var incorrectans0q2 = document.querySelector("#incorrect0Q2")
var incorrectans1q2 = document.querySelector("#incorrect1Q2")
var incorrectans2q2 = document.querySelector("#incorrect2Q2")

correctansq2.addEventListener("click", function() {
    showQ3();
    correctMessage();
})

incorrectans0q2.addEventListener("click", function() {
    showQ3();
    incorrectMessage();
})

incorrectans1q2.addEventListener("click", function() {
    showQ3();
    incorrectMessage();
})

incorrectans2q2.addEventListener("click", function() {
    showQ3();
    incorrectMessage();
})

//Q3

var correctansq3 = document.querySelector("#correctQ3");
var incorrectans0q3 = document.querySelector("#incorrect0Q3")
var incorrectans1q3 = document.querySelector("#incorrect1Q3")
var incorrectans2q3 = document.querySelector("#incorrect2Q3")

correctansq3.addEventListener("click", function() {
    showQ4();
    correctMessage();
})

incorrectans0q3.addEventListener("click", function() {
    showQ4();
    incorrectMessage();
})

incorrectans1q3.addEventListener("click", function() {
    showQ4();
    incorrectMessage();
})

incorrectans2q3.addEventListener("click", function() {
    showQ4();
    incorrectMessage();
})

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
