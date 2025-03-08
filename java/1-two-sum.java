class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hashMap = new HashMap<Integer, Integer>();

        for(int i = 0; i < nums.length; i++) {
            if (hashMap.containsKey(nums[i])) {
                int[] res = { i, hashMap.get(nums[i]) };
                return res;
            } else {
                hashMap.put(target - nums[i], i);
            }
        }
    }
}