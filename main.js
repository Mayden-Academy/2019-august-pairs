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
    //defines the number of cards that the game will be using
    gameSizeAtStart: 16,
    timer: 0,
    cardWinningBorder: null,
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

setInterval(function () {
    document.querySelector("#newGameText").style.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
}, 128)

// Shuffles the image numbers
game.cardImageArray = shuffle(game.cardImageArray)

// Event listener on the new game button that will reset the game 
document.querySelector(".newGameButton-easy").addEventListener("click", function (e) {
    e.stopPropagation
    game.gameSizeAtStart = 16
    initialiseEasyGame()
    resetGame()
})

document.querySelector(".newGameButton-hard").addEventListener("click", function (e) {
    e.stopPropagation
    game.gameSizeAtStart = 32
    initialiseHardGame()
    resetGame()
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

//initialise hard mode
initialiseHardGame()