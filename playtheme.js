// Plays Theme song on load of page. 
function play() {
    var audio = document.getElementById("theme");
    audio.play();
}

// Plays when game completed.
function playComplete() {
    var audio = document.getElementById("alright");
    audio.play();
}

// Plays when card doesnt match.
function playWrong() {
    var audio = document.getElementById("idiot");
    audio.play();
}



// Mutes sound. 
var theme = document.getElementById("theme");
var complete = document.getElementById("alright");
var bob = document.getElementById("bobsound");
var linda = document.getElementById("lindasound");
var tina = document.getElementById("tinasound");
var gene = document.getElementById("genesound");
var louise = document.getElementById("louisesound");
var teddy = document.getElementById("teddysound");
var marshmellow = document.getElementById("marshmellowsound");
var dryap = document.getElementById("dryapsound");
var wrong = document.getElementById("idiot");

function enableMute() { 
  theme.muted = true;
  complete.muted = true;
  bob.muted = true;
  linda.muted = true;
  tina.muted = true;
  gene.muted = true;
  louise.muted = true;
  teddy.muted = true;
  marshmellow.muted = true;
  dryap.muted = true;
  wrong.muted = true;
} 

function disableMute() { 
  theme.muted = false;
  complete.muted = false;
  bob.muted = false;
  linda.muted = false;
  tina.muted = false;
  gene.muted = false;
  louise.muted = false;
  teddy.muted = false;
  marshmellow.muted = false;
  dryap.muted = false;
  wrong.muted = false;
}

// When card matches. 
function checkBob() {
    if(document.getElementsByClassName("bobmatch") === document.getElementsByClassName("bobmatch")) {
        playBob();
    }
}

function checkLinda() {
    if(document.getElementsByClassName("lindamatch") === document.getElementsByClassName("lindamatch")) {
        playLinda();
    }
}

function checkTina() {
    if(document.getElementsByClassName("tinamatch") === document.getElementsByClassName("tinamatch")) {
        playTina();
    }
}

function checkGene() {
    if(document.getElementsByClassName("genematch") === document.getElementsByClassName("genematch")) {
        playGene();
    }
}

function checkLouise() {
    if(document.getElementsByClassName("louisematch") === document.getElementsByClassName("louisematch")) {
        playLouise();
    }
}

function checkTeddy() {
    if(document.getElementsByClassName("teddymatch") === document.getElementsByClassName("teddymatch")) {
        playTeddy();
    }
}

function checkMarshmellow() {
    if(document.getElementsByClassName("marshmellowmatch") === document.getElementsByClassName("marshmellowmatch")) {
        playMarshmellow();
    }
}

function checkDrYap() {
    if(document.getElementsByClassName("dryapmatch") === document.getElementsByClassName("dryapmatch")) {
        playDrYap();
    }
}


// Card match sounds
function playBob() {
    var audio = document.getElementById("bobsound");
    audio.play();
}

function playLinda() {
    var audio = document.getElementById("lindasound");
    audio.play();
}

function playTina() {
    var audio = document.getElementById("tinasound");
    audio.play();
}

function playGene() {
    var audio = document.getElementById("genesound");
    audio.play();
}

function playLouise() {
    var audio = document.getElementById("louisesound");
    audio.play();
}

function playTeddy() {
    var audio = document.getElementById("teddysound");
    audio.play();
}

function playMarshmellow() {
    var audio = document.getElementById("marshmellowsound");
    audio.play();
}

function playDrYap() {
    var audio = document.getElementById("dryapsound");
    audio.play();
}