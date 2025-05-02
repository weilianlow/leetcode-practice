// https://leetcode.com/problems/merge-strings-alternately/
var mergeAlternately = function(word1, word2) {
  let w1 = word1.split('');
  let w2 = word2.split('');
  let v = [];
  while(w1.length > 0 || w2.length > 0){
      if (w1.length > 0){
          v.push(w1.shift());
      }
      if (w2.length > 0){
          v.push(w2.shift());
      }
  }
  return v.join('');
};

describe('test', () => {
  it.each([
    ['abc', 'pqr', 'apbqcr'], ['ab', 'pqrs', 'apbqrs'], ['abcd', 'pq', 'apbqcd'],
  ])('should return the correct length for %s', (word1, word2, output) => {
    expect(mergeAlternately(word1, word2)).toBe(output);
  });
});