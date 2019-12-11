//Best avg and worst is O(nlogn)
//Space complexity is O(n)
function mergeArray(ar1, ar2) {
    let temp = [], i = 0, j = 0;
    while (i < ar1.length && j < ar2.length) {
        if (ar1[i] < ar2[j]) {
            temp.push(ar1[i]);
            i++;
        } else {
            temp.push(ar2[j]);
            j++;
        }
    }
    while (i < ar1.length) {
        temp.push(ar1[i]);
        i++;
    }
    while (j < ar2.length) {
        temp.push(ar2[j]);
        j++;
    }
    return temp;
}

function splitArray(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = splitArray(arr.slice(0, mid));
    let right = splitArray(arr.slice(mid));
    return mergeArray(left, right);
}

splitArray([11, 2, 50, 9]);