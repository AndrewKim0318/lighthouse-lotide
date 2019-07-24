const assertEqual = function(actual, expected) {
  const inputOne = actual;
  const inputTwo = expected;
  let result = "";
  if (inputOne === inputTwo) {
    result += `✅Assertion Passed: ${inputOne} === ${inputTwo}`;
  } else {
    result += `🔴Assertion Failed: ${inputOne} !== ${inputTwo}`;
  }
  return result;
};

const countLetters = function(string) {
  //input: a string that you want check how many times each letter appears within the string
  //output: an object that displays how many times a letter appeared within the string for all letters that are in the string

  let result = {};

  // remove all the spaces within the string
  let spaceRemovedString = string.split(' ').join('');
  for (let letter of spaceRemovedString) {
    if (letter in result) {
      continue;
    } else {
      let count = countAppearance(spaceRemovedString, letter);
      result[letter] = count;
    }
  }
  return result;

};

const countAppearance =  function(string, key) {
  //input :  string and a letter
  //output :  a number that represents how many times the letter appeared within the string
  let count = 0;
  for (let letter of string) {
    if (letter === key) {
      count++;
    }
  }
  return count;
};

console.log(countLetters("lighthouse in the house"));