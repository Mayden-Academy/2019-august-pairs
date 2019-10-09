/**
 * Remove the click event listeners from the matchedCards.js
 */

function matchedCards(){
game.matchedCards.forEach(function(id){
    document.getElementById(id).removeEventListener("click")
})
}