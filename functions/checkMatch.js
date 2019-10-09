function checkMatch() {
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


    //pick a random card from the array
    //get the value of the first chosenCard and use it to decide the position to check in the cardsArray and store the result in a variable
    var deckCardOne = game.cardsArray[(game.cardsTurn[0])];

    //picks a random card for the second card
    //get the value of the first chosenCard and use it to decide the position to check in the cardsArray and store the result in a variable
    var deckCardTwo = game.cardsArray[(game.cardsTurn[1])];

    //check if the two cards are strictly equal

    if (deckCardOne === deckCardTwo){//yes
        //return a boolean value of true
        game.cardsTurn = []
        game.matchedCards.push(chosenCards[0])
        game.matchedCards.push(chosenCards[1])
        disableCards(chosenCards)
        //Adds a CSS style to a matched pair.
        game.matchedCards.classList += " matched"
        return true
    }else{//no
        //return a boolean value of false
        game.cardsTurn = []
        return false;
    }

}
