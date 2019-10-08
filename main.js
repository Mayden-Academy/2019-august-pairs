let game = {
    cardArray: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
}
export {game}
var cards = document.querySelectorAll('.card')

//forEach loop that calls displayImage function when a card is clicked
cards.forEach(function(card) {
    card.addEventListener('click', function(e){
        let cardId = e.id
        displayImage(game.cardArray, cardId)
    })
})
