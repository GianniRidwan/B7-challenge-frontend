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

var i = 0;

startbutton.addEventListener("click", function() {
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

backbutton.addEventListener("click", function() {
    if (i == 0){
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
        titel.innerHTML = subjects[i]["title"];
        stelling.innerHTML = subjects[i]["statement"];
    };
    
});

eensbutton.addEventListener("click", function() {
    i == i++;
    titel.innerHTML = subjects[i]["title"];
    stelling.innerHTML = subjects[i]["statement"];
});

gvbbutton.addEventListener("click", function() {
    i == i++;
    titel.innerHTML = subjects[i]["title"];
    stelling.innerHTML = subjects[i]["statement"];
});

oneensbutton.addEventListener("click", function() {
    i == i++;
    titel.innerHTML = subjects[i]["title"];
    stelling.innerHTML = subjects[i]["statement"];
});

skipbutton.addEventListener("click", function() {
    i == i++;
    titel.innerHTML = subjects[i]["title"];
    stelling.innerHTML = subjects[i]["statement"];
});