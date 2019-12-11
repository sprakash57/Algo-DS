//Sorting in a single loop
let nums = [4, 6, 1, 0, -10, 8, 15, 20, 100];
let count = 0;
for (let i = 1; i < nums.length; i++) {
  count++;
  if (nums[i] < nums[i - 1]) {
    [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
    i = 0;
  }
}
console.log(count); //29
console.log(nums);
