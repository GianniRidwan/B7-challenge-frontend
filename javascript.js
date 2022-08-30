var startdiv = document.getElementById("startdiv");
var backbutton = document.getElementById("backbutton");
var startbutton = document.getElementById("startbutton");
var starttitel = document.getElementById("starttitel");
var starttext = document.getElementById("starttext");
var titel = document.getElementById("titel");
var stelling = document.getElementById("stelling");
var eensbutton = document.getElementById("eensbutton");
var gvbbutton = document.getElementById("gvbbutton");
var oneensbutton = document.getElementById("oneensbutton");
var skipbutton = document.getElementById("skipbutton");
var questionSelect = document.getElementById("questionSelect");

var choices = [];
var questions = 0;

startbutton.addEventListener("click", function () {
    starttitel.style.display = "none";
    starttext.style.display = "none";
    startbutton.style.display = "none";
    backbutton.style.display = "block";
    titel.style.display = "block";
    stelling.style.display = "block";
    titel.innerHTML = subjects[questions]["title"];
    stelling.innerHTML = subjects[questions]["statement"];
    eensbutton.style.display = "block";
    gvbbutton.style.display = "block";
    oneensbutton.style.display = "block";
    skipbutton.style.display = "block";
});

backbutton.addEventListener("click", function () {
    if (questions == 0) {
        starttitel.style.display = "block";
        starttext.style.display = "block";
        startbutton.style.display = "block";
        backbutton.style.display = "none";
        titel.style.display = "none";
        stelling.style.display = "none";
        eensbutton.style.display = "none";
        gvbbutton.style.display = "none";
        oneensbutton.style.display = "none";
        skipbutton.style.display = "none";
    } else {
        questions == questions--;
        getStatement();
        eensbutton.style.display = "block";
        gvbbutton.style.display = "block";
        oneensbutton.style.display = "block";
        skipbutton.style.display = "block";
    };
});

eensbutton.addEventListener("click", function () {
    choices[questions] = "pro";
    questions == questions++;
    getStatement();
});

gvbbutton.addEventListener("click", function () {
    choices[questions] = "gvb"
    questions == questions++;
    getStatement();
});

oneensbutton.addEventListener("click", function () {
    choices[questions] = "contra"
    questions == questions++;
    getStatement();
});

skipbutton.addEventListener("click", function () {
    choices[questions] = "skip"
    questions == questions++;
    getStatement();
});

function getStatement() {
    if (questions == 4) {
        eensbutton.style.display = "none";
        gvbbutton.style.display = "none";
        oneensbutton.style.display = "none";
        skipbutton.style.display = "none";
        titel.innerHTML = "Kies voor jou belangrijke onderwerpen:";
        importantQuestions();
    } else {
        titel.innerHTML = subjects[questions]["title"];
        stelling.innerHTML = subjects[questions]["statement"];
    }
    console.log(choices);
    console.log(questions);
};



function importantQuestions() {
    document.getElementById("questionSelect").style.display = "inline"
    document.getElementById("partiesSelect").style.display = "none";

    var questionsList = document.getElementById("questionList");
    if (questionsList.innerHTML == "") {
        titel.innerHTML = "Belangrijke onderwerpen"
        stelling.innerHTML = "Kies voor jou belangrijke onderwerpen:"
        for (var i = 0; i < subjects.length; i++) {
            questionsList.innerHTML += '<label><input type="checkbox" name="' + subjects[i].title + '"> ' + subjects[i].title + '</label><br>';
        }
    }
}

function importantParties() {
    document.getElementById("btnEnd").style.display = "inline";
    document.getElementById("partiesSelect").style.display = "inline";
    document.getElementById("questionSelect").style.display = "none";

    var partiesForm = document.getElementById("partieList");
    if (partiesForm.innerHTML == "") {
        titel.innerHTML = "Belangrijke partijen"
        stelling.innerHTML = "Kies voor jou belangrijke partijen:"
        for (var i = 0; i < parties.length; i++) {
            partiesForm.innerHTML += '<label><input type="checkbox" name="' + parties[i].name + '"> ' + parties[i].name + '</label><br>';
        }
    }
}