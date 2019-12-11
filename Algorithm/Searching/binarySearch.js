const search = (nums, target) => {
  let left = 0,
    right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (target !== nums[mid] && left <= right) {
    if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }
  return nums[mid] === target ? mid : -1;
};

console.log(search([1, 2, 3, 4, 5], 6));
