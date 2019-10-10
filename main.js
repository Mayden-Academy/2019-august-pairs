let game = {
    cardArray: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
    cards: document.querySelectorAll('.card'),
    matchedCards: [],
    cardsTurn: [],
    clicks: 0
}

game.cardArray = shuffle(game.cardArray)

document.querySelector('.newGame').addEventListener('click', function(e) {
    e.stopPropagation
    let cards = document.querySelectorAll('.card')
    cards.forEach(function(card) {
        card.style = ""
    	card.classList = "card card-back"
    })
    game.cardArray = shuffle(game.cardArray)
})

document.querySelector('.instructionsButton').addEventListener('click', function(e){
    let instructions = document.querySelector('.instructions')
    if (instructions.classList.contains("hidden")) {
        instructions.classList.remove("hidden")
    } else {
        instructions.classList.add("hidden")
    }
})

//forEach loop that calls displayImage function when a card is clicked
game.cards.forEach(function(card) {
    card.addEventListener('click', function(event){
        event.stopImmediatePropagation()
        if(!(this.classList.contains('matched'))) {
            let cardId = this.id
        card.classList = "card"
        displayImage(game.cardArray, cardId)
        isTurnLegit(cardId)
        }        
    })
})

