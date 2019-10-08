function shuffle(arr) {
    /** shuffle the array **/
    /* This function:
    *       1. receives a simple array of integers
    *       2. reorders all of the items in a random order
    *       3. returns an array with the re-ordered items
    *
    * @param - ARRAY - un-shuffled card order id's
    *
    * @return - ARRAY - shuffled card order id's
    *
    * */
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

// export shuffle function on it's own
export { shuffle as default };
