const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    //flip card animation
    this.classList.add('flip');

    //if hasflippedcard isnt false
    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        //second click
        hasFlippedCard = false;
        secondCard = this;

        //do cards match...
        if (firstCard.dataset.name === secondCard.dataset.name) {
            //it matches!
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else {
            //no match!
            setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            }, 1500);
        }
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));