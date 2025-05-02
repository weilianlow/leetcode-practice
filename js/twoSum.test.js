// https://leetcode.com/problems/two-sum/
var twoSum = function (nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }

  return [];
};
describe('test', () => {
  it.each([
    [[2, 7, 11, 15], 9, [0, 1]], [[3, 2, 4], 6, [1, 2]], [[3, 3], 6, [0, 1]]
  ])('should return the correct length for %s', (nums, target, output) => {
    expect(twoSum(nums, target)).toStrictEqual(output);
  });
});