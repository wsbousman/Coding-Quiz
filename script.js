let startBtn = document.getElementById('startBtn');
let answerBtn1 = document.getElementById('button1');
let answerBtn2 = document.getElementById('button2');
let answerBtn3 = document.getElementById('button3');
let answerBtn4 = document.getElementById('button4');
let theFinalCountdown = document.getElementById('theFinalCountdown');
let preguntaText = document.getElementById('pregunta');
let boxy = document.getElementById('boxy');
let answers = document.getElementById('answers');
let remainder = 120;
let score = 0;
// localStorage.setItem("score", "0");
// let score = localStorage.getItem("score");

function decrementRemainder () {
    remainder = remainder - 10;
};

function timer () {
    // get rid of start button on click
    startBtn.style.visibility = "hidden";
    // set interval of one second
    setInterval(function() {
    // if time remains, display the multiple seconds left
    if (remainder > 1) {
        theFinalCountdown.textContent = remainder + " seconds remaining. No pressure.";
        // decrement remainder
        remainder--;
    // if a single second remains, display the singular second left and an encouraging scream
    } else if (remainder === 1) {
        theFinalCountdown.textContent = remainder + " second remaining. AAAAHHHHH!!!";
        remainder--;
    // if time left becomes less than 0, display only score
    } else {
        endQuiz ();
    };
}, 1000);
question1 ();
};

function wrong1 () {
    decrementRemainder ();
    question2 ();
};

function correct1 () {
    score = score + 10;
    question2 ();
};

function question1 () {
    preguntaText.textContent = "Inverting binary trees is:";
    answerBtn1.innerText = "Only possible in Python."
    answerBtn1.style.visibility = "visible";
    answerBtn2.innerText = "Impossible."
    answerBtn2.style.visibility = "visible";
    answerBtn3.innerText = "Expected in technical interviews."
    answerBtn3.style.visibility = "visible";
    answerBtn4.innerText = "When you uproot and flip non-binary plants."
    answerBtn4.style.visibility = "visible";
    document.getElementById('button1').addEventListener("click", wrong1);
    document.getElementById('button2').addEventListener("click", wrong1);
    document.getElementById('button3').addEventListener("click", correct1);
    document.getElementById('button4').addEventListener("click", wrong1);
    };

function correct2 () {
    score = score + 10;
    question3 ();
};

function wrong2 () {
    question3 ();
};

function question2 () {
    preguntaText.textContent = "Which is the oldest language?";
    answerBtn1.innerText = "C"
    answerBtn2.innerText = "Lisp"
    answerBtn3.innerText = "Java"
    answerBtn4.innerText = "Ruby"
    document.getElementById('button1').addEventListener("click", wrong2);
    document.getElementById('button2').addEventListener("click", correct2);
    document.getElementById('button3').addEventListener("click", wrong2);
    document.getElementById('button4').addEventListener("click", wrong2);
};

function wrong3 () {
    question4 ();
};

function correct3 () {
    score = score + 10;
    question4 ();
};

function question3 () {
    preguntaText.textContent = "'Boolean blindness' refers to:";
    answerBtn1.innerText = "Stringing together excessive if/else statements.";
    answerBtn2.innerText = "Information lost in Boolean expressions.";
    answerBtn3.innerText = "Forgetting Booleans called in another function.";
    answerBtn4.innerText = "Going blind from drinking too much lean.";
    document.getElementById('button1').addEventListener("click", wrong3);
    document.getElementById('button2').addEventListener("click", correct3);
    document.getElementById('button3').addEventListener("click", wrong3);
    document.getElementById('button4').addEventListener("click", wrong3);
};

function wrong4 () {
    question5 ();
};

function correct4 () {
    score = score + 10;
    question5 ();
};

function question4 () {
    preguntaText.textContent = "Which of the following for loops is properly notated?";
    answerBtn1.innerText = "for (let i = 0 i < array.length) {}";
    answerBtn2.innerText = "for (let i, 0; i, array.length; i++) {}";
    answerBtn3.innerText = "for (let i === 0, i < array.length, i++) {}";
    answerBtn4.innerText = "for (let i = 0; i < array.length; i++) {}";
    document.getElementById('button1').addEventListener("click", wrong4);
    document.getElementById('button2').addEventListener("click", wrong4);
    document.getElementById('button3').addEventListener("click", wrong4);
    document.getElementById('button4').addEventListener("click", correct4);
};

function wrong5 () {
    question6 ();
};

function correct5 () {
    score = score + 10; 
    question6 ();
};

function question5 () {
    preguntaText.textContent = "In an effort to ruggedize control flow, NASAs guidelines for the 2.5 million lines of C that control the Curiosity rover feature ___ recursion.";
    answerBtn1.innerText = "Primitive";
    answerBtn2.innerText = "Tail";
    answerBtn3.innerText = "Minimal";
    answerBtn4.innerText = "Acyclic";
    document.getElementById('button1').addEventListener("click", wrong5);
    document.getElementById('button2').addEventListener("click", wrong5);
    document.getElementById('button3').addEventListener("click", correct5);
    document.getElementById('button4').addEventListener("click", wrong5);
};

function wrong6 () {
    endQuiz ();
};

function correct6 () {
    score = score + 10;
    endQuiz ();
};

function question6 () {
    preguntaText.textContent = "True or False: Of all built in Python data types, 'list' has the fewest number of characters in its name.";
    answerBtn1.innerText = "True";
    answerBtn2.innerText = "False";
    document.getElementById('button1').addEventListener("click", endQuiz);
    document.getElementById('button2').addEventListener("click", endQuiz);
    document.getElementById('button3').style.visibility = "hidden";
    document.getElementById('button4').style.visibility = "hidden";
};

function endQuiz () {
    document.getElementById('button1').style.visibility = "hidden";
    document.getElementById('button2').style.visibility = "hidden";
    document.getElementById('button3').style.visibility = "hidden";
    document.getElementById('button4').style.visibility = "hidden";
    pregunta.innerText = "les jeux son fait. you scored " + score;
    document.getElementById("theFinalCountdown").style.visibility = "hidden";
    document.getElementById('scoreInputWrapper').style.visibility = 'visible';
};

document.getElementById('startBtn').addEventListener("click", timer);