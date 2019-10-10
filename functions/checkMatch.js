function checkMatch() {
    // Getting the ID's of the cards from the turn cards array
    card1Id = game.cardsTurn[0]
    card2Id = game.cardsTurn[1]

    // Getting the cards image numbers from the cards array
    card1Image = game.cardArray[card1Id]
    card2Image = game.cardArray[card2Id]

    // Checking if the two cards images match
    if (card1Image === card2Image) {
           // Adds card ID's to the matched cards array
           game.matchedCards.push(parseInt(card1Id), parseInt(card2Id))

           game.cardsTurn.forEach(function(card) {
               // Adds matched class to matching cards
               document.getElementById(card).classList = "card matched"
               // Remove event listener
           })


    } else {
        game.cardsTurn.forEach(function(card) {
            // Adds delay to resetting cards
            setTimeout(function() {
                // Removes image from cards
                document.getElementById(card).style = ""
                // Set cards back on their back
                document.getElementById(card).classList = "card card-back"
        }, 250)
           })
    }
    // Resets carsTurn
    game.cardsTurn = []
}
