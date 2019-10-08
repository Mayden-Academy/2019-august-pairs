/**
 * gets element id from document and adds a background image to CSS
 *
 * @param {array} array takes an entered array
 * @return {number} int takes id from html file and used as a key to get value from array and attach to string in new background image
 */
function displayImage (array, id) {
	let card = document.getElementById(id)
    card.style.backgroundImage = "url('images/gecko" + array[id] + ".jpg')"
}

