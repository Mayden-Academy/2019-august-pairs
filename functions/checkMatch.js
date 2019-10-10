/*
* This function:
*      1. stores the id of cards from cardsTurn array (the cards that are clicked in each turn)
*      2. fetches the image array positions of the cards stored in 1.
*      3. checks if the image array positions match and if so, adds cards' id to  matched cards array, adds matched class to
*       those card elements and removes event listener from them
*      4. if not matching a delay is added to resetting cards, gecko image is removed and card-back is reinstated
*      5. cardsTurn is reset to start a new turn
*/
function checkMatch() {
    // Getting the ID's of the cards from the turn cards array
    let card1Id = game.cardsTurn[0]
    let card2Id = game.cardsTurn[1]

    // Getting the cards image numbers from the cards array
    let card1Image = game.cardImageArray[card1Id]
    let card2Image = game.cardImageArray[card2Id]

    // Checking if the two cards images match
    if (card1Image === card2Image) {
        // Adds card ID's to the matched cards array
        game.matchedCards.push(card1Id,card2Id)

        game.cardsTurn.forEach(function(card) {
            // Adds matched class to matching cards
            document.getElementById(card).classList.add("matched")
        })
        if (game.matchedCards.length == 16) {
                setInterval(function() {
                    document.querySelectorAll(".matched").forEach(function(card) {
                        card.style.borderColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," +  Math.floor(Math.random() * 255) + ")"
                })},100)
                setTimeout(function() {
                    alert("Geckcellent work! Completed in " + game.timer + " seconds and " + game.turn +  " turns. Want to geckgo again?")
                }, 500)
                
            game.gameFinished = true

        }
    } else {
        game.cardsTurn.forEach(function(card) {
            // Adds delay to resetting cards
            setTimeout(function() {
                // Removes image from cards
                document.getElementById(card).style = ""
                // Set cards back on their back
                document.getElementById(card).classList.add("card-back")
            }, 800)
        })
    }
    // Resets cardsTurn
    game.cardsTurn = []
}
