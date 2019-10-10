function resetGame() {
    document.querySelector('.timer').textContent = 'Timer: 0'
    document.querySelector(".cardContainer").classList.remove("hidden")
    document.querySelector("#newGameText").classList.add("hidden")
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
    clearInterval(game.cardWinningBorder)
}