# https://leetcode.com/problems/palindrome-number/
import pytest


class Solution:
    def isPalindrome(self, x: int) -> bool:
        string_x = str(x)
        return all([string_x[i] == string_x[len(string_x)-1-i] for i in range(int(len(string_x)/2))])


@pytest.mark.parametrize(
    "s, assert_val",
    [(121, True), (-121, False), (10, False)],
)
def test(s: str, assert_val: bool):
    assert Solution().isPalindrome(s) == assert_val
