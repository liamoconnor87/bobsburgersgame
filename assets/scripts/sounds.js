// Plays Theme song.
function playTheme() {

    var audio = document.getElementById("theme");
    
    audio.play();

}

// Plays sound when game completed.
function playComplete() {

    theme.volume = 0.2;
    linda.volume = 0;
    gene.volume = 0.2;
    tina.volume = 0.2;
    bruce.volume = 0.2;

    var audio = document.getElementById("alright");

    audio.play();

}

// Values for mute functions defined.
var theme = document.getElementById("theme");
var complete = document.getElementById("alright");
var linda = document.getElementById("lindasound");
var gene = document.getElementById("genesound");
var louise = document.getElementById("louisesound");
var tina = document.getElementById("tinasound");
var bruce = document.getElementById("brucesound");
var bob = document.getElementById("bobsound");
var teddy = document.getElementById("teddysound");

// Mutes all sounds.
function enableMute() {

    theme.muted = true;
    complete.muted = true;
    linda.muted = true;
    gene.muted = true;
    louise.muted = true;
    tina.muted = true;
    bruce.muted = true;
    bob.muted = true;
    teddy.muted = true;

}

// Unmutes all sounds.
function disableMute() { 

    theme.muted = false;
    complete.muted = false;
    linda.muted = false;
    gene.muted = false;
    louise.muted = false;
    tina.muted = false;
    bruce.muted = false;
    bob.muted = false;
    teddy.muted = false;

}

// Function to reset Volume.
function resetVolume() {

    theme.volume = 1;
    linda.volume = 1;
    gene.volume = 0.3;
    tina.volume = 1;
    bruce.volume = 1;

}

// Plays when two cards match.
function playLinda() {

    var audio = document.getElementById("lindasound");

    audio.play();

}

// Plays when card flips.
function playGene() {

    gene.volume = 0.3;

    var audio = document.getElementById("genesound");

    audio.play();

}

function playTina() {

    var audio = document.getElementById("tinasound");

    audio.play();

}

function playBruce() {

    var audio = document.getElementById("brucesound");

    audio.play();

}

// Plays when selecting NO on reset game options.
function playLouise() {

    var audio = document.getElementById("louisesound");

    audio.play();

}

function playTeddy() {

    var audio = document.getElementById("teddysound");

    audio.play();

}

function playBob() {

    var audio = document.getElementById("bobsound");

    audio.play();

}