//[4,6,1,10,8,15]

function bubbleSortNaive(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log("count naive: ", count); //121
  return arr;
}

console.log("naive: ", bubbleSortNaive([4, 6, 1, 0, -10, 8, 15, 20, 100]));

function bubbleSort(arr) {
  let count = 0,
    noSwaps;
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  console.log("count optimized: ", count); //40
  return arr;
}

console.log("optimized", bubbleSort([4, 6, 1, 0, -10, 8, 15, 20, 100]));
