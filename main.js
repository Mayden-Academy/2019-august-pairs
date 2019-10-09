let game = {
    cardArray: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
    cards: document.querySelectorAll('.card')
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
    if (instructions.style.display == "none") {
        instructions.style.display = "block"
    } else {
        instructions.style.display = "none"
    }
})

//forEach loop that calls displayImage function when a card is clicked
game.cards.forEach(function(card) {
    card.addEventListener('click', function(event){
        event.stopImmediatePropagation()
        let cardId = this.id
        card.classList = "card"
        displayImage(game.cardArray, cardId)
    })
})

