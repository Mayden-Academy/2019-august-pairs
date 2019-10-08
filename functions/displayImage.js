
function displayImage (array, id) {
    document.getElementById(id).style.backgroundImage = "url('images/gecko" + array[id] + ".jpg')"
}

export {displayImage as default}

