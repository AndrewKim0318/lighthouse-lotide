const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  // input : object and the value that is used to find the key
  // output : a string of the key that points to the value

  for (let key in object) {
    if (object[key] === value) {
      let keyValue = key;
      return keyValue;
    } else {
      continue;
    }
  }

  return undefined;

};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

module.exports = findKeyByValue;

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
