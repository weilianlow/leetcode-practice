# https://leetcode.com/problems/merge-strings-alternately/
import pytest


class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        w1 = list(word1)
        w2 = list(word2)
        v = []
        while w1 or w2:
            if w1:
                v.append(w1.pop(0))
            if w2:
                v.append(w2.pop(0))
        return ''.join(v)


@pytest.mark.parametrize(
    "word1, word2, output",
    [('abc', 'pqr', 'apbqcr'), ('ab', 'pqrs', 'apbqrs'), ('abcd', 'pq', 'apbqcd')],
)
def test(word1: str, word2: str, output: str):
    assert Solution().mergeAlternately(word1, word2) == output
