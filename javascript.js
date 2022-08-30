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

var choices = [];
var i = 0;

startbutton.addEventListener("click", function () {
    starttitel.style.display = "none";
    starttext.style.display = "none";
    startbutton.style.display = "none";
    backbutton.style.display = "block";
    titel.style.display = "block";
    stelling.style.display = "block";
    titel.innerHTML = subjects[i]["title"];
    stelling.innerHTML = subjects[i]["statement"];
    eensbutton.style.display = "block";
    gvbbutton.style.display = "block";
    oneensbutton.style.display = "block";
    skipbutton.style.display = "block";
});

backbutton.addEventListener("click", function () {
    if (i == 0) {
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
        i == i--;
        getStatement();
        eensbutton.style.display = "block";
        gvbbutton.style.display = "block";
        oneensbutton.style.display = "block";
        skipbutton.style.display = "block";
    };
});

eensbutton.addEventListener("click", function () {
    choices[i] = "pro";
    i == i++;
    getStatement();
});

gvbbutton.addEventListener("click", function () {
    choices[i] = "gvb"
    i == i++;
    getStatement();
});

oneensbutton.addEventListener("click", function () {
    choices[i] = "contra"
    i == i++;
    getStatement();
});

skipbutton.addEventListener("click", function () {
    choices[i] = "skip"
    i == i++;
    getStatement();
});

function getStatement() {
    if (i == 4) {
        eensbutton.style.display = "none";
        gvbbutton.style.display = "none";
        oneensbutton.style.display = "none";
        skipbutton.style.display = "none";
        titel.innerHTML = "Kies voor jou belangrijke onderwerpen:";
        // subjects.forEach(createCheckboxElement);
    } else {
        titel.innerHTML = subjects[i]["title"];
        stelling.innerHTML = subjects[i]["statement"];
    }
    console.log(choices);
    console.log(i);
};

// function checkbox() {
//     var x = document.createElement("INPUT");
//     x.setAttribute("type", "checkbox");
//     x.innerHTML = subjects;
// };

// function createCheckboxElement(arr) {
//     for (var option of arr) {
//         var checkboxName = (option.name == null) ? option.title : option.name;

//         var div = document.createElement('div');
//         div.classList.add("div5");
//         var checkbox = document.createElement('input');
//         checkbox.type = "checkbox";
//         checkbox.name = "cb";
//         checkbox.value = checkboxName;
//         checkbox.id = checkboxName;

//         var label = document.createElement('label');
//         label.htmlFor = checkboxName;
//         text = document.createTextNode(checkboxName);
//         label.appendChild(text);
//         div.appendChild(checkbox);
//         div.appendChild(label);
//         checkboxdiv.appendChild(div);
//     }
// }