import {game} from 'main.js'
//create eventListener for New Game html element with params of game object and shuffled array
document.querySelector('.newGame').addEventListener('click', function (e) {
    e.stopImmediatePropagation()
    if (game.gameStarted = true) {
        document.querySelector('.cards').styles.backgroundImage="url('images/cardBack.jpg')"
    } else {
        game.gameStarted = true
        var shuffledDeck = shuffle()
        return shuffledDeck
    }
})
