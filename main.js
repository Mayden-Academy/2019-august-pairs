var cards = document.querySelectorAll('.card')

//forEach loop that calls displayImage function when a card is clicked
cards.forEach(function(card) {
    card.addEventListener('click', function(e){
        let cardId = e.id
        displayImage(game.cardArray, cardId)
        e.stopImmediatePropagation()
    })
})