// FUNCTION IMPLEMENTATION

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

//TEST CODE
console.log(assertEqual("LighthouseLabs", "Bootcamp"));
console.log(assertEqual(1, 1));
