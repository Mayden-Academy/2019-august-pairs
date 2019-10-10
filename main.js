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
    turn: 0,
    timer: 0,
    timerSwitch: false,
    gameFinished: false,
    timerObject: function () {
        setInterval(function () {
            if (game.gameFinished === false) {
                game.timer++
                document.querySelector('.timer').textContent = 'Timer: ' + game.timer + 's'
            }
        }, 1000)
    }
}

setInterval(function() {
    document.querySelector("#newGameText").style.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," +  Math.floor(Math.random() * 255) + ")"
},128)

// Shuffles the image numbers
game.cardImageArray = shuffle(game.cardImageArray)

// Event listener on the new game button that will reset the game 
document.querySelector(".newGameButton").addEventListener("click", function (e) {
    e.stopPropagation
    document.querySelector('.timer').textContent = 'Timer: 0'
    document.querySelector(".cardContainer").classList.remove("hidden")
    document.querySelector("#newGameText").classList.add("hidden")
    document.querySelectorAll(".matched").forEach(function (card) {
        card.style = ""
    })
    if (game.matchedCards.length <= 16) {
        if (game.timer > 0) {
            game.timer = 0
            game.gameFinished = false
        } else {
            if (game.timerSwitch === false) {
                game.timerObject()
                game.timerSwitch === true
            }
        }
    } else {
        clearInterval(game.timerObject)
    }
})

    // Reset game state
    game.matchedCards = []
    game.clicks = 0
    game.cardsTurn = []
    game.turn = 0
    document.querySelector('.turnNumber').textContent = game.turn

    // Turn cards back over
    game.cards.forEach(function (card) {
        card.style = ""
        card.classList = "card card-back"
    })

    // Reshuffles images
    game.cardImageArray = shuffle(game.cardImageArray)
})


// Instructions button event listener
document.querySelector(".instructionsButton").addEventListener("click", function (e) {
    let instructions = document.querySelector(".instructions")
    if (instructions.classList.contains("hidden")) {
        instructions.classList.remove("hidden")
    } else {
        instructions.classList.add("hidden")
    }
})

//forEach loop that calls displayImage function when a card is clicked
game.cards.forEach(function (card) {
    card.addEventListener("click", function (event) {
        // Stops event listener affecting cards other than the clicked card
        event.stopImmediatePropagation()
        if (!(this.classList.contains("matched"))) {
            // ID of card clicked
            let cardId = this.id
            // Removes card back class
            document.getElementById(cardId).style.transform = "rotateY(180deg)"
            card.classList.remove("card-back")
            // Displays cards image
            displayImage(cardId)
            // Checks if card is valid for current turn
            isTurnLegit(cardId)
            document.querySelector('.turnNumber').textContent = game.turn
        }
    })
})



