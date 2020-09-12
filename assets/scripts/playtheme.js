// Plays Theme song on load of page. 
function play() {
    var audio = document.getElementById("theme");
    audio.play();
}

// Plays when game completed.
function playComplete() {
    theme.volume = 0.2;
    bob.volume = 0.2;
    linda.volume = 0.2;
    tina.volume = 0.2;
    gene.volume = 0.2;
    louise.volume = 0.2;
    teddy.volume = 0.2;
    marshmellow.volume = 0.2;
    dryap.volume = 0.2;

    var audio = document.getElementById("alright");
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
}


// Card flip sound.
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