let matchedCard = document.getElementsByClassName("memory-card flip")

function complete() {
    if (matchedCard.length == 16) {
        window.clearInterval(interval);
    }
}