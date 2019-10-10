function checkMatch() {
    console.log("checkMatch running!")
    // Getting the ID's of the cards from the turn cards array
    card1ID = game.cardsTurn[0]
    card2ID = game.cardsTurn[1]

    // Getting the cards image numbers from the cards array
    card1Image = game.cardArray[card1ID]
    card2Image = game.cardArray[card2ID]

    // Checking if the two cards images match
    if (card1Image === card2Image) {
           // Adds card ID's to the matched cards array
           game.matchedCards.push(parseInt(card1ID), parseInt(card2ID))
           console.log(game.matchedCards)
           game.cardsTurn.forEach( function(card) {
               // Adds matched class to matching cards
               document.getElementById(card).classList = "card matched"
               // Remove event listener
           })

           // Resets carsTurn
           game.cardsTurn = []

    } else {
        game.cardsTurn.forEach( function(card) {
            // Adds delay to resetting cards
            setTimeout(function() {
                // Removes image from cards
                document.getElementById(card).style = ""
                // Set cards back on their back
                document.getElementById(card).classList = "card card-back"
        }, 250)
           })

        // Resets carsTurn
        game.cardsTurn = []
    }

}
