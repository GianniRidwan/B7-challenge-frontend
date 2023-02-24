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
var questionsList = document.getElementById("questionList");
var partiesSelect = document.getElementById("partiesSelect");
var resultScreen = document.getElementById("resultScreen");
var partiesForm = document.getElementById("partieList");
var size = document.getElementById("size");
var secu = document.getElementById("secu");

var choices = [];
var questions = 0;
var width = 0;
var partieData = [];
var questionData = [];
var partiesList = [];

function progress(value){
    // function to print a progress bar
    var progressline = document.getElementById("progressline");
    width = width+value;
    progressline.style.width = (width  ) + "%";    
}

startbutton.addEventListener("click", function () {
    // function to start the questions
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
    progress(0);
});

backbutton.addEventListener("click", function () {
    // function to go back 1 page for each click
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
        questions--;
        progress(-3.125);
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
    questions++;
    getStatement();
    resetColor();
    progress(3.125);
});

gvbbutton.addEventListener("click", function () {
    choices[questions] = "gvb"
    questions++;
    getStatement();
    resetColor();
    progress(3.125);
});

oneensbutton.addEventListener("click", function () {
    choices[questions] = "contra"
    questions++;
    getStatement();
    resetColor();
    progress(3.125);
});

skipbutton.addEventListener("click", function () {
    choices[questions] = "skip"
    questions++;
    getStatement();
    resetColor();
    progress(3.125);
});

function resetColor() {
    // function to reset the button colors
    eensbutton.style.backgroundColor = 'rgb(34, 160, 17)';
    gvbbutton.style.backgroundColor = 'rgb(195, 194, 194)';
    oneensbutton.style.backgroundColor = 'rgb(248, 4, 4)';
    skipbutton.style.backgroundColor = 'rgb(216, 216, 216)';
};

function getStatement() {
    // function to get a new question
    questionsList.innerHTML = ""
    if (questions == 30) {
        eensbutton.style.display = "none";
        gvbbutton.style.display = "none";
        oneensbutton.style.display = "none";
        skipbutton.style.display = "none";
        importantQuestions();
    } else {
        titel.innerHTML = subjects[questions]["title"];
        stelling.innerHTML = subjects[questions]["statement"];
    }
};

function importantQuestions() {
    // function to choose the important questions
    document.getElementById("questionSelect").style.display = "inline";
    document.getElementById("partiesSelect").style.display = "none";
    partiesForm.innerHTML = ""
    if (questionsList.innerHTML == "") {
        titel.innerHTML = "Belangrijke onderwerpen"
        stelling.innerHTML = "Kies voor jou belangrijke onderwerpen:"
        for (var i = 0; i < subjects.length; i++) {
            questionsList.innerHTML += '<label><input type="checkbox" name="' + subjects[i].title + '"> ' + subjects[i].title + '</label><br>';
        }
    }
}

function importantParties() {
    // function to choose the important parties
    document.getElementById("btnEnd").style.display = "inline";
    document.getElementById("partiesSelect").style.display = "inline";
    document.getElementById("questionSelect").style.display = "none";

    if (partiesForm.innerHTML == "") {
        titel.innerHTML = "Belangrijke partijen"
        stelling.innerHTML = "Kies voor jou belangrijke partijen:"
        size.innerHTML = '<label><input id="checkSize" type="checkbox" name="checkSize" onclick="sizeFunc()"> Alle grote partijen</label><br>'
        secu.innerHTML = '<label><input id="checkSecu" type="checkbox" name="checkSecu" onclick="secuFunc()"> Alle seculiere partijen</label><br><br>'
        for (var i = 0; i < parties.length; i++) {
            partiesForm.innerHTML += '<label><input type="checkbox" id="' + parties[i].name + '" name="' + parties[i].name + '"> ' + parties[i].name + '</label><br>';
        }
    }
}

function sizeFunc() {
    // function to select all big parties
    if (checkSize.checked) {
        for (var e = 0; e < parties.length; e++) {
            if (parties[e].size > 9) {
                var dikke_baap = document.getElementById(parties[e].name);
                dikke_baap.checked = true;
            }
        }
    } else {
        for (var e = 0; e < parties.length; e++) {
            if (parties[e].size > 9) {
                var vieze_asbak = document.getElementById(parties[e].name);
                if (checkSecu.checked) {
                    vieze_asbak.checked = true;
                } else {
                    vieze_asbak.checked = false;
                }
            }
        }
    }
}

function secuFunc() {
    // function to select all the secular parties
    if (checkSecu.checked) {
        for (var o = 0; o < parties.length; o++) {
            if (parties[o].secular == true) {
                var natte_visstick = document.getElementById(parties[o].name);
                natte_visstick.checked = true;
            }
        }
    } else {
        for (var o = 0; o < parties.length; o++) {
            if (parties[o].secular == true) {
                var gladde_paling = document.getElementById(parties[o].name);
                if (checkSize.checked) {
                    gladde_paling.checked = true;
                } else {
                    gladde_paling.checked = false;
                }
            }
        }
    }
}

function calculatePoints() {
// function to gather all the points
    var questionForm = document.getElementById("questionForm").elements;
    for (var i = 0; i < questionForm.length; i++) {
            questionData[questionForm[i].name] = questionForm[i].checked;
    }

    var partieForm = document.getElementById("partieForm").elements;
    for (var i = 0; i < partieForm.length; i++) {
            partieData[partieForm[i].name] = partieForm[i].checked;
    }

    for (var i = 0; i < parties.length; i++) {
        partiesList[parties[i].name] = 0;
    }

    count = 0;
    maxpoints = subjects.length;
    for (var a = 0; a < subjects.length; a++) {
        for (var b = 0; b < subjects[a].parties.length; b++) {
            if ((choices[a] == "pro" && subjects[a].parties[b].position == "pro") || (choices[a] == "contra" && subjects[a].parties[b].position == "contra") || (choices[a] == "none" && subjects[a].parties[b].position == "none")) {
                if (questionData[subjects[a].title] == true) {
                    partiesList[subjects[a].parties[b].name] += 2;
                    count+=2;
                    maxpoints+=1;
                } else {
                    partiesList[subjects[a].parties[b].name] += 1;
                    count++;
                }
            }
        }
    }
}

function Result() {
    // function to calculate the points to percentage and print on screen
    calculatePoints();

    var partieDisplayList = document.getElementById("partieDisplayList");
    document.getElementById("btnEnd").style.display = "none";
    document.getElementById("partiesSelect").style.display = "none";
    document.getElementById("resultScreen").style.display = "block";

    partieDisplayList.innerHTML = "";
    titel.innerHTML = "Resultaat:";
    stelling.innerHTML = "";

    function percentage(partialValue, totalValue) {
        perc = (100 * partialValue) / totalValue;
        fixedperc = Number.parseFloat(perc).toFixed(2);
     } 

    var arrayPartiesList = [];
    for (var partie in partiesList) {
        arrayPartiesList.push([partie, partiesList[partie]]);
    }

    for (partie in arrayPartiesList) {
        percentage(partiesList[arrayPartiesList[partie][0]], maxpoints)
        partieDisplayList.innerHTML += "<p>" + arrayPartiesList[partie][0] + " (" + fixedperc + "%)</p>";
    }
}