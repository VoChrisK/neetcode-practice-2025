/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hashmap = {};

  for(let i = 0; i < nums.length; i++) {
      if (nums[i] in hashmap) {
          return [i, hashmap[nums[i]]];
      } else {
          hashmap[target - nums[i]] = i;
      }
  }
};
