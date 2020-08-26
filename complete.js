let matchedCard = document.getElementsByClassName("memory-card flip")

function complete() {
    if (matchedCard.length == 12) {
        window.clearInterval(interval);
    }
}