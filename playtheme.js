// Plays Theme song on load of page. 
function play() {
    var audio = document.getElementById("theme");
    audio.play();
}

// Mutes sound. 
var x = document.getElementById("theme");

function enableMute() { 
  x.muted = true;
} 

function disableMute() { 
  x.muted = false;
}

// Triggers when there is a match!
function soundConfirm() {
    if(document.getElementById("bob") === document.getElementById("bob")) {
        play();
    }
}