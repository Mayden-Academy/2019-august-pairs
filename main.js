let game = {
    cardArray: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
}

game.cardArray = shuffle(game.cardArray)

// Get cards from DOM and store them as a NodeList
var cards = document.querySelectorAll('.card')

document.querySelector('.newGame').addEventListener('click', function(e) {
    e.stopImmediatePropagation()
    document.querySelector('.cards').styles.backgroundImage="url('images/cardBack.jpg')"
    game.cardArray = shuffle(game.cardArray)
})

//forEach loop that calls displayImage function when a card is clicked
cards.forEach(function(card) {
    card.addEventListener('click', function(e){
        e.stopImmediatePropagation()
        let cardId = e.id
        displayImage(game.cardArray, cardId)
    })
})
