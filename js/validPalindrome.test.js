// https://leetcode.com/problems/valid-palindrome/description/
var isPalindrome = function (s) {
  newStr = [];
  for (i = 0; i < s.length; i++) {
    if (s[i].match(/^[a-zA-Z0-9]+$/)) {
      newStr.push(s[i].toLowerCase());
    }
  }
  for (i = 0; i < Math.floor(newStr.length / 2); i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

describe('test', () => {
  it.each([
    ['A man, a plan, a canal: Panama', true],
    ['race a car', false],
    [' ', true],
  ])('should return the correct length for %s', (input, expected) => {
    expect(isPalindrome(input)).toBe(expected);
  });
});