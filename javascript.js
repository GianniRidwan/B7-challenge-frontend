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
var partiesSelect = document.getElementById("partiesSelect");
var resultScreen = document.getElementById("resultScreen");

var choices = [];
var questions = 0;
var partieData = [];
var questionData = [];
var partiesList = [];

startbutton.addEventListener("click", function () {
    starttitel.style.display = "none";
    starttext.style.display = "none";
    startbutton.style.display = "none";
    resultScreen.style.display = "none";
    partiesSelect.style.display = "none";
    backbutton.style.display = "block";
    titel.style.display = "block";
    stelling.style.display = "block";
    titel.innerHTML = subjects[questions]["title"];
    stelling.innerHTML = subjects[questions]["statement"];
    eensbutton.style.display = "block";
    gvbbutton.style.display = "block";
    oneensbutton.style.display = "block";
    skipbutton.style.display = "block";
    resetColor();
});

backbutton.addEventListener("click", function () {
    if (resultScreen.style.display != 'none') {
        resultScreen.style.display = 'none'
        titel.innerHTML = "Belangrijke partijen"
        stelling.innerHTML = "Kies voor jou belangrijke partijen:"
        importantParties();
    } else if (partiesSelect.style.display != 'none') {
        partiesSelect.style.display = 'none'
        titel.innerHTML = "Belangrijke onderwerpen"
        stelling.innerHTML = "Kies voor jou belangrijke onderwerpen:"
        importantQuestions();
    } else if (questions == 0) {
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
        questionSelect.style.display = "none";
        questions == questions--;
        getStatement();
        eensbutton.style.display = "block";
        gvbbutton.style.display = "block";
        oneensbutton.style.display = "block";
        skipbutton.style.display = "block";
        
        if (choices[questions] == "pro"){
            resetColor();
            eensbutton.style.backgroundColor = 'rgb(28, 32, 164)';
        } else if (choices[questions] == "gvb") {
            resetColor();
            gvbbutton.style.backgroundColor = 'rgb(28, 32, 164)';
        } else if (choices[questions] == "contra") {
            resetColor();
            oneensbutton.style.backgroundColor = 'rgb(28, 32, 164)';
        } else if (choices[questions] == "skip"){
            resetColor();
            skipbutton.style.backgroundColor = 'rgb(28, 32, 164)';
        }
    };
});

eensbutton.addEventListener("click", function () {
    choices[questions] = "pro";
    questions == questions++;
    getStatement();
    resetColor();
});

gvbbutton.addEventListener("click", function () {
    choices[questions] = "gvb"
    questions == questions++;
    getStatement();
    resetColor();
});

oneensbutton.addEventListener("click", function () {
    choices[questions] = "contra"
    questions == questions++;
    getStatement();
    resetColor();
});

skipbutton.addEventListener("click", function () {
    choices[questions] = "skip"
    questions == questions++;
    getStatement();
    resetColor();
});

function resetColor() {
    eensbutton.style.backgroundColor = 'rgb(34, 160, 17)';
    gvbbutton.style.backgroundColor = 'rgb(195, 194, 194)';
    oneensbutton.style.backgroundColor = 'rgb(248, 4, 4)';
    skipbutton.style.backgroundColor = 'rgb(216, 216, 216)';
};

function getStatement() {
    if (questions == parties.length) {
        eensbutton.style.display = "none";
        gvbbutton.style.display = "none";
        oneensbutton.style.display = "none";
        skipbutton.style.display = "none";
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

function calculatePartiePoints() {

    //Get checked boxes from questions form
    var questionForm = document.getElementById("questionForm").elements;
    for (var i = 0; i < questionForm.length; i++) {
        if (questionForm[i].type != "submit") { //dont include submit button
            questionData[questionForm[i].name] = questionForm[i].checked;
        }
    }

    //Get checked boxes from parties form
    var partieForm = document.getElementById("partieForm").elements;
    for (var i = 0; i < partieForm.length; i++) {
        if (partieForm[i].type != "submit") { //dont include sumbit button
            partieData[partieForm[i].name] = partieForm[i].checked;
        }
    }

    //Generate array with all parties
    for (var i = 0; i < parties.length; i++) {
        partiesList[parties[i].name] = 0;
    }

    count = 0;
    for (var a = 0; a < subjects.length; a++) { //Loop through questions
        for (var b = 0; b < subjects[a].parties.length; b++) { //Loop through and compare partie positions
            if ((choices[a] == "pro" && subjects[a].parties[b].position == "pro") || (choices[a] == "contra" && subjects[a].parties[b].position == "contra") || (choices[a] == "none" && subjects[a].parties[b].position == "none")) {
                if (questionData[subjects[a].title] == true) {
                    partiesList[subjects[a].parties[b].name] += 2;
                    count+=2;
                } else {
                    partiesList[subjects[a].parties[b].name] += 1;
                    count++;
                }
            }
        }
    }
    console.log(count);
}

function EndResultScreen() {
    calculatePartiePoints();

    var partieDisplayList = document.getElementById("partieDisplayList");
    document.getElementById("btnEnd").style.display = "none";
    document.getElementById("partiesSelect").style.display = "none";
    document.getElementById("resultScreen").style.display = "block";

    partieDisplayList.innerHTML = "";
    titel.innerHTML = "Resultaat:";
    stelling.innerHTML = "";

    //Convert object to array and sort
    var arrayPartiesList = [];

    for (var partie in partiesList) {
        arrayPartiesList.push([partie, partiesList[partie]]);
    }

    for (partie in arrayPartiesList) {
        partieDisplayList.innerHTML += "<p>" + arrayPartiesList[partie][0] + "(" + partiesList[arrayPartiesList[partie][0]] + " punten)</p>";
    }
}