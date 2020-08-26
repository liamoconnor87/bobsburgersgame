let matchedCard = document.getElementsByClassName("flip")

function complete() {
    if (matchedCard.length == 12) {
        window.clearInterval(interval);
    }
}