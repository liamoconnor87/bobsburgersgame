// Plays Theme song. 
function playTheme() {
    var audio = document.getElementById("theme");
    audio.play();
}

// Plays when game completed.
function playComplete() {
    theme.volume = 0.2;
    linda.volume = 0;
    gene.volume = 0.2;
    louise.volume = 0.2;

    var audio = document.getElementById("alright");
    audio.play();
}


// Mutes sound. 
var theme = document.getElementById("theme");
var complete = document.getElementById("alright");
var linda = document.getElementById("lindasound");
var gene = document.getElementById("genesound");
var louise = document.getElementById("louisesound");

function enableMute() { 
  theme.muted = true;
  complete.muted = true;
  linda.muted = true;
  gene.muted = true;
  louise.muted = true;
} 

function disableMute() { 
  theme.muted = false;
  complete.muted = false;
  linda.muted = false;
  gene.muted = false;
  louise.muted = false;
}


// When cards match.
function playLinda() {
    var audio = document.getElementById("lindasound");
    audio.play();
}

// When card flips. 
function playGene() {
    gene.volume = 0.3;
    var audio = document.getElementById("genesound");
    audio.play();
}

// Plays when selecting NO on reset game options. 
function playLouise() {
    var audio = document.getElementById("louisesound");
    audio.play();
}