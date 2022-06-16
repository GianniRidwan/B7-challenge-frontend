var startdiv = document.getElementById("startdiv");
var backbutton = document.getElementById("backbutton");
var startbutton = document.getElementById("startbutton");
var starttitel = document.getElementById("starttitel");
var starttext = document.getElementById("starttext");
var titel = document.getElementById("titel");
var stelling = document.getElementById("stelling");

startbutton.addEventListener("click", function() {
    starttitel.style.display = "none";
    starttext.style.display = "none";
    startbutton.style.display = "none";
    backbutton.style.display = "block";
    titel.style.display = "block";
    stelling.style.display = "block";
    titel.innerHTML = subjects[0]["title"];
    stelling.innerHTML = subjects[0]["statement"];
});

backbutton.addEventListener("click", function() {
    starttitel.style.display = "block";
    starttext.style.display = "block";
    startbutton.style.display = "block";
    backbutton.style.display = "none";
    titel.style.display = "none";
    stelling.style.display = "none";
});

