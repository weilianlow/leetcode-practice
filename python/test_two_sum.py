# https://leetcode.com/problems/two-sum/
import pytest


class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        numMap = {}

        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in numMap:
                return [numMap[complement], i]
            numMap[nums[i]] = i

        return []


@pytest.mark.parametrize(
    "nums, target, output",
    [([2, 7, 11, 15], 9, [0, 1]), ([3, 2, 4], 6, [1, 2]), ([3, 3], 6, [0, 1])],
)
def test(nums: list[int], target: int, output: list[int]):
    assert Solution().twoSum(nums, target) == output
