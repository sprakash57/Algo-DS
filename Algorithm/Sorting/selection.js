function selection(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      if (min > arr[j]) {
        arr[i] = arr[j];
        arr[j] = min;
        min = arr[i];
      }
    }
  }
  console.log(count); //55
  return arr;
}

console.log(selection([4, 6, 1, 0, -10, 8, 15, 20, 100]));
