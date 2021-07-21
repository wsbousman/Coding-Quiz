let startBtn = document.getElementById('startBtn');
let answerBtn1 = document.getElementById('button1');
let answerBtn2 = document.getElementById('button2');
let answerBtn3 = document.getElementById('button3');
let answerBtn4 = document.getElementById('button4');
let theFinalCountdown = document.getElementById('theFinalCountdown');
let preguntaText = document.getElementById('pregunta');
let remainder = 180;

let score = 0;

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
    // if time left becomes less than 0, display score
    } else {
        theFinalCountdown.textContent = "les jeux son fait. you scored " + score;
    };
}, 1000);
question1 ();
};

function wrong1 () {
    remainder = remainder - 10;
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
    document.getElementById('button4').addEventListener("click", wrong1);
    document.getElementById('button3').addEventListener("click", correct1);
    };

function wrong2 () {
    remainder = remainder - 10;
    question3 ();
};

function correct2 () {
    score = score + 10;
    question3 ();
};

function question2 () {
    preguntaText.textContent = "Which is the oldest language?";
    answerBtn1.innerText = "C"
    answerBtn1.style.visibility = "visible";
    answerBtn2.innerText = "Lisp"
    answerBtn2.style.visibility = "visible";
    answerBtn3.innerText = "Java"
    answerBtn3.style.visibility = "visible";
    answerBtn4.innerText = "Ruby"
    answerBtn4.style.visibility = "visible";
    document.getElementById('button1').addEventListener("click", wrong2);
    document.getElementById('button3').addEventListener("click", wrong2);
    document.getElementById('button4').addEventListener("click", wrong2);
    document.getElementById('button2').addEventListener("click", correct2);
};

document.getElementById('startBtn').addEventListener("click", timer);



