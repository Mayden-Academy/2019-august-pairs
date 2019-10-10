/** initialises the hard mode **/
/*
* this function:
*   1. overrides the display property of the .extraCardContainer from 'none' to 'block'
*   2. override the number of cards that the game will be using from 16 to 32
*   2. enlarges the cardImageArray to 32 cards (16 pairs)
*   3. shuffle the array
*
 */
function initialiseHardGame() {

    //override the display property of the .extraCardContainer from 'none' to 'block'
    document.querySelector(".extraCardContainer").style.display = "block"

    //override the width property of the .cardContainer from '620' to '920'
    document.querySelector(".cardContainer").style.width = "1226px"

    //override the number of cards that the game will be using
    game.gameSizeAtStart = 32

    //enlarge the  to 32 cards (16 pairs)
    game.cardImageArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16]

    //shuffle array
    shuffle (game.cardImageArray)

}
