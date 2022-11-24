const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');
    assert.isTrue(result);
  });


    it("should return true if the word is present even if spelt vertically", function() {
      const result = wordSearch([
        ['A', 'W', 'C', 'F', 'Q', 'D', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'O', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'G', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'G', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'I', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ], 'DOGGIE');

    assert.isTrue(result);
  });

  it("should return false if the word is present even if spelt vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'Q', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'R', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'J', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'C', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'K', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

  assert.isFalse(result);
});


it("should return false if the word is present, but split between rows", function() {
  const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'D', 'R', 'E'],
    ['A', 'C', 'T', 'N', 'F', 'O', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'S', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'G', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'R', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'REACT');

assert.isFalse(result);
});

it("should return false if the word is too long", function() {
  const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'D', 'R', 'E'],
    ['A', 'C', 'T', 'N', 'F', 'O', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'S', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'G', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'R', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'MISSISSIPI');

assert.isFalse(result);
});

it("should return false if the lowercase word is present", function() {
  const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'seinfeld');
  assert.isFalse(result);
});

it("should return false if letter is an empty array", function() {
  const result = wordSearch([], 'SEINFELD');
  assert.isFalse(result);
});



});
