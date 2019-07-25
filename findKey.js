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

const checkCondition = function(condition, conditionCriteria) {
  // input : a condition you want to check and the condition criteria you want to compare the condition to pass
  // output : boolean, true if condition passes criteria, false if condition fails criteria

  const conditionMet = conditionCriteria(condition);
  //conditionMet checks to see if the value of conditionToCheck meets the criteria of the condition

  return conditionMet;
};

const findKey = function(object, condition) {
  // input : an object containing many key/value pairs that need to be tested to see if it passed the condition
  // output: the first key that has a value that passes the condition
  let foundKey = "";

  for (let key in object) {
    let conditionToCheck = object[key];
    let checkedCondition = checkCondition(conditionToCheck, condition);

    if (checkedCondition) {
      foundKey = key;
      break;
    } else {
      continue;
    }
  }

  return foundKey;
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1));
