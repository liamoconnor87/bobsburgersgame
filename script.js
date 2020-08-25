const cards = document.querySelectorAll('.memory-card');

function flipcard(){
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipcard));