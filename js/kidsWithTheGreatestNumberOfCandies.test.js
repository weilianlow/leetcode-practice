// https://leetcode.com/problems/two-sum/
var kidsWithCandies = function (candies, extraCandies) {
  let v = [];
  let maxCandies = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if ((candies[i] + extraCandies) >= maxCandies) {
      v[i] = true;
    } else {
      v[i] = false;
    }
  }
  return v;
};

describe('test', () => {
  it.each([
    [[2, 3, 5, 1, 3], 3, [true, true, true, false, true]],
    [[4, 2, 1, 1, 2], 1, [true, false, false, false, false]],
    [[12, 1, 12], 10, [true, false, true]]
  ])('should return the correct length for %s', (candies, extraCandies, output) => {
    expect(kidsWithCandies(candies, extraCandies)).toStrictEqual(output);
  });
});