import {game} from '../main.js'
import 'shuffle.js'
//create eventListener for New Game html element with params of game object and shuffled array
document.querySelector('.newGame').addEventListener('click', function(e) {
    e.stopImmediatePropagation()
    document.querySelector('.cards').styles.backgroundImage="url('images/cardBack.jpg')"
    game.cardArray = shuffle(game.cardArray)
)
}