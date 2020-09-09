// Plays Theme song on load of page. 
function play() {
    var audio = document.getElementById("theme");
    audio.play();
}

// Mutes sound. 
var theme = document.getElementById("theme");

function enableMute() { 
  theme.muted = true;
} 

function disableMute() { 
  theme.muted = false;
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
        continue;
    }
}

// Card match sounds
function playBob() {
    var audio = document.getElementById("theme");
    audio.play();
}

function playLinda() {
    var audio = document.getElementById("theme");
    audio.play();
}

function playTina() {
    var audio = document.getElementById("theme");
    audio.play();
}

function playGene() {
    var audio = document.getElementById("theme");
    audio.play();
}

function playLouise() {
    var audio = document.getElementById("theme");
    audio.play();
}

function playTeddy() {
    var audio = document.getElementById("theme");
    audio.play();
}

function playMarshmellow() {
    var audio = document.getElementById("theme");
    audio.play();
}

function playDrYap() {
    var audio = document.getElementById("theme");
    audio.play();
}