/**
 * 53. Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/
 *
 * Uses Kadane's Alg to rebuild and find max of array
 */
const maxSubarray = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarray(nums)); // expects 6
