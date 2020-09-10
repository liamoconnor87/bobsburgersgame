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

// Mutes sound. 
var theme = document.getElementById("theme");
var complete = document.getElementById("alright");
var bob = document.getElementById("bob");
var linda = document.getElementById("linda");
var tina = document.getElementById("tina");
var gene = document.getElementById("gene");
var louise = document.getElementById("louise");
var teddy = document.getElementById("teddy");
var marshmellow = document.getElementById("marshmellow");
var dryap = document.getElementById("dryap");

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

// Triggers when there is a match!
function soundConfirm() {
    if(document.getElementById("bob") === document.getElementById("bob")) {
        playBob();
    } else if(document.getElementById("linda") === document.getElementById("linda")) {
        playLinda();
    } else if(document.getElementById("tina") === document.getElementById("tina")) {
        playTina();
    } else if(document.getElementById("gene") === document.getElementById("gene")) {
        playGene();
    } else if(document.getElementById("louise") === document.getElementById("louise")) {
        playLouise();
    } else if(document.getElementById("teddy") === document.getElementById("teddy")) {
        playTeddy();
    } else if(document.getElementById("marshmellow") === document.getElementById("marshmellow")) {
        playMarshmellow();
    } else if(document.getElementById("dryap") === document.getElementById("dryap")) {
        playDrYap();
    } else {
        console.log("Error!");
    }
}

// Card match sounds
function playBob() {
    var audio = document.getElementById("bob");
    audio.play();
}

function playLinda() {
    var audio = document.getElementById("linda");
    audio.play();
}

function playTina() {
    var audio = document.getElementById("tina");
    audio.play();
}

function playGene() {
    var audio = document.getElementById("gene");
    audio.play();
}

function playLouise() {
    var audio = document.getElementById("louise");
    audio.play();
}

function playTeddy() {
    var audio = document.getElementById("teddy");
    audio.play();
}

function playMarshmellow() {
    var audio = document.getElementById("marshmellow");
    audio.play();
}

function playDrYap() {
    var audio = document.getElementById("dryap");
    audio.play();
}