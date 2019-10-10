let game = {
    // Stores image numbers for the 16 cards (cardImageArray)
    cardImageArray: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
    // Node list of all the card elements
    cards: document.querySelectorAll(".card"),
    // Array of the ID's of cards that have been matched
    matchedCards: [],
    // Stores the card ID's of the cards active in the current turn
    cardsTurn: [],
    // Stores the number of clicks in the current turn 0 - 2
    clicks: 0,
    turn: 0
}

// Shuffles the image numbers
game.cardImageArray = shuffle(game.cardImageArray)

// Event listener on the new game button that will reset the game 
document.querySelector(".newGame").addEventListener("click", function(e) {
    e.stopPropagation

    // Reset game state
    game.matchedCards = []
    game.clicks = 0
    game.cardsTurn = []
    game.turn = 0
    document.querySelector('.turnNumber').textContent=game.turn

    // Turn cards back over
    game.cards.forEach(function(card) {
        card.style = ""
        card.classList = "card card-back"
    })

    // Reshuffles images
    game.cardImageArray = shuffle(game.cardImageArray)
})


// Instructions button event listener
document.querySelector(".instructionsButton").addEventListener("click", function(e) {
    let instructions = document.querySelector(".instructions")
    if (instructions.classList.contains("hidden")) {
        instructions.classList.remove("hidden")
    } else {
        instructions.classList.add("hidden")
    }
})

//forEach loop that calls displayImage function when a card is clicked
game.cards.forEach(function (card) {
    card.addEventListener("click", function(event) {
        // Stops event listener affecting cards other than the clicked card
        event.stopImmediatePropagation()
        if (!(this.classList.contains("matched"))) {
            // ID of card clicked
            let cardId = this.id
            // Removes card back class
            card.classList.remove("card-back")
            // Displays cards image
            displayImage(cardId)
            // Checks if card is valid for current turn
            isTurnLegit(cardId)
            document.querySelector('.turnNumber').textContent=game.turn
        }
    })
})

