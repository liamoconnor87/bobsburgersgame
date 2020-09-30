// Values defined for flip card function.
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Triggers function to reset values before next flip combo. 
function resetBoard() {

    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;

}

// Values for count function.
let combos = 0;

// Card combo counter - Triggers function once two cards are flipped.
function count() {

    $(".count").text(++combos);

}

// Resets Counter.
function counterReset() {

    combos = 0;

    $(".count").text("0");
    
}

// Card shuffle function - Triggers on screen/game load. 
function shuffle() {

    cards.forEach(card => {
        
        let cardShuffle = Math.floor(Math.random()*16);
        card.style.order = cardShuffle;

    });

}

// Flip card function. 
function flipCard() {
    
    if (lockBoard) return;

    // Prevents click of same card twice
    if (this === firstCard) return;

    // Flip card animation
    this.classList.add('flip');

    if (!hasFlippedCard) {

        // Function starts timer on first click. 
        startTimer();

        // First click
        hasFlippedCard = true;
        firstCard = this;

    } else {

        // Second click
        secondCard = this;
        
        //Function triggers - Counts when two flips have been made.
        count();

        // Condition - Do cards match?
        if (firstCard.dataset.name === secondCard.dataset.name) {

            // It matches!
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);

            // Triggers function to reset board values.
            resetBoard();

            // Triggers function to play sound. 
            playLinda();

            // Triggers function to check if game is complete.
            stopTimer();
            
        } else {

            lockBoard = true;

            // No match!
            setTimeout(() => {

            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            // Triggers function to reset board values.
            resetBoard();
            
            }, 1000);

        }

    }

}

cards.forEach(card => card.addEventListener('click', flipCard));

// Function for play same level again. 
function gameReload() {

    // All cards flip back.
    $(".memory-card").removeClass("flip");

    // Event listeners are re added to cards.
    cards.forEach(card => card.addEventListener('click', flipCard));

    shuffle();

    // Function reset volume.
    resetVolume();

    // Function resets timer.
    timerReset();

    // Resets counter.
    counterReset();

}