// https://leetcode.com/problems/palindrome-number/
var isPalindrome = function(x) {
  strX = String(x);
  for (let i = 0;i<Math.floor(strX.length/2);i++){
      if (strX[i] !== strX[strX.length - 1 - i]){
          return false;
      }
  }
  return true;
};

describe('test', () => {
  it.each([
    [121, true], [-121, false], [10, false],
  ])('should return the correct length for %s', (input, expected) => {
    expect(isPalindrome(input)).toBe(expected);
  });
});