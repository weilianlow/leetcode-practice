# https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
import pytest


class Solution:
    def kidsWithCandies(self, candies: list[int], extraCandies: int) -> list[bool]:
        return [c + extraCandies >= max(candies) for c in candies]


@pytest.mark.parametrize(
    "candies, extraCandies, output",
    [
        ([2, 3, 5, 1, 3], 3, [True, True, True, False, True]),
        ([4, 2, 1, 1, 2], 1, [True, False, False, False, False]),
        ([12, 1, 12], 10, [True, False, True]),
    ],
)
def test(candies: list[int], extraCandies: int, output: list[bool]):
    assert Solution().kidsWithCandies(candies, extraCandies) == output
