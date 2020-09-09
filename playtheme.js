function play() {
    var audio = document.getElementById("theme");
    audio.play();
}

var x = document.getElementById("theme");

function enableMute() { 
  x.muted = true;
} 

function disableMute() { 
  x.muted = false;
}