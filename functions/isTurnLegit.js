/** check if two unique cards have been clicked **/

/* This function:
*       1. receives an id of the clicked card
*       2. loads the clicks property of the game object
*       3. checks if the theCard is in the cardsTurn property of the game object
*       4. adds the theCard to the cardsTurn property of the game object
*       5. increments the clicks property of the game object by one
*       6. checks if the clicks property of the game object is equal to two
*       7. resets clicks property of the game object to zero
*       8. calls the checkMatch function
*
*
* */
function isTurnLegit(theCard) {

    //check if the theCard is in the cardsTurn property of the game object
    if (!game.cardsTurn.includes(theCard)) {
        //add the theCard to the cardsTurn property
        game.cardsTurn.push(theCard)
        //increment the clicks property of the game object by one
        game.clicks++
        //check if the clicks property of the game object is equal to two
        if (game.clicks === 2) {//yes

            //reset clicks property of the game object to zero if turn over
            game.clicks = 0
            //call the checkMatch function
            checkMatch()

        }

    }

}
