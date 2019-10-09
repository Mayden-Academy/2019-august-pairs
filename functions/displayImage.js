/** swap the background image of a card with an actual picture of a gecko **/

/*
* This function:
*      1. receives an array of all of the card locations
*      2. receives a string with the location id of the intended card to show
*      3. selects the placeholder that matches the location id
*      4. changes the background property of the selected placeholder card to show the actual gecko picture
*
* @param - ARRAY - the location id's for all of the cards
*
* @param - STRING - the location id of the chosen card
*
*/
function displayImage(array, id) {
    document.getElementById(id).style.backgroundImage = "url('images/gecko" + array[id] + ".jpg')"
}

