//Useful when you are appending fetched data from server in a sorted array;
function insertion(arr) {
    let j;
    //let say 0th element in arr is sorted and other are unsorted
    for (let i = 1; i < arr.length; i++) {
        let selected = arr[i]; //extract next unsorted data
        for (j = i - 1; j >= 0; j--) { //loop over sorted data to the left
            //if extracted element > current element the move current element to right
            if (arr[j] > selected) arr[j + 1] = arr[j];
            else break;
        }
        //insert the extracted element at this place
        arr[j + 1] = selected;
    }
    return arr;
}

console.log(insertion([4, 6, 1, 0, -10, 8, 15, 20, 100]));
