/**
 * This sorting technique use digits of elements present in an array and
 * sort them in 0-9 bucket. It doesn't do any comparison
 */
function getDigitNum(num, idx) {
    return Math.floor((Math.abs(num) / 10 ** idx) % 10)
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1)
}

function maxDigits(arr) {
    let maxDigitCount = 0;
    for (let el of arr) {
        maxDigitCount = Math.max(maxDigitCount, digitCount(el));
    }
    return maxDigitCount;
}

function radixSort(arr) {
    let loopCount = maxDigits(arr);
    // console.log(loopCount);
    for (let i = 0; i < loopCount; i++) {
        // console.log(arr);
        let bucket = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigitNum(arr[j], i)
            bucket[digit].push(arr[j]);
        }

        arr = [].concat(...bucket);
    }

    return arr;
}
// console.log(getDigitNum(-14565, 1))
// console.log(digitCount(3));
console.log(radixSort([4, 6, 1, 0, 8, 15, 20, 100]));
// console.log(digitCount(1))