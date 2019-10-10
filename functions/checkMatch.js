/** check if two cards match **/
/* This function:
*       1. receives an array of all of the card's locations
*       2. receives an array of chosen card locations
*       3. uses the values in the chosen card array to determine which locations to check in the cards array
*       4. gets the values stored in those locations in the card array
*       5. checks if the two values in the card array match
*       6. returns true if both match
*       7. returns false if they do not match
*
* @param - ARRAY - all 16 x card locations
*
* @param - ARRAY - chosen 2 x card location
*
* @return - BOOLEAN - do the cards match Y/N
*
* */
function checkMatch(cardsArray, chosenCards) {
    var deckCardOne = cardsArray[chosenCards[0]];
    var deckCardTwo = cardsArray[chosenCards[1]];
    if (deckCardOne === deckCardTwo){
        game.cardsTurn = []
        if(game.matchedCards.length == 16) {
            alert("Geckcellent work my friend! Wanna geckgo again?")
        }
        disableCards(chosenCards)
        //Adds a CSS style to a matched pair.
        game.matchedCards.classList += " matched"
        return true
    }else{
        return false;
    }
}

