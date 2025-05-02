# https://leetcode.com/problems/valid-palindrome/description/
import pytest


class Solution:
    def isPalindrome(self, s: str) -> bool:
        filtered = [_s.lower() for _s in s if _s.isalnum()]

        return all(
            [
                filtered[i] == filtered[len(filtered) - i - 1]
                for i in range(int(len(filtered) / 2))
            ]
        )


@pytest.mark.parametrize(
    "s, assert_val",
    [("A man, a plan, a canal: Panama", True), ("race a car", False), (" ", True)],
)
def test(s: str, assert_val: bool):
    assert Solution().isPalindrome(s) == assert_val
