//finding pair elements in array whose sum is zero ---> Multiple pointers moving in some direction
function sumZero(a) {
  let end = a.length - 1;
  let start = 0;
  let res = [];
  for (let i = 0; i <= end; i++) {
    if (a[start] + a[end] === 0) {
      res.push([a[start], a[end]]);
      end++;
      start++;
    } else if (a[start] + a[end] > 0) {
      end--;
    } else {
      start++;
    }
  }
  return res.length ? res : undefined;
}
