console.log("Bài 1:");
const numbers = [-1, 2, 3, 4, 7, 8];
function hasNegative(number) {
  // for (let i = 0; i < number.length; i++) {
  //   if (number[i] < 0) {
  //     return true;
  //   }
  //   return false;
  // }
  const result = number.some(function (value) {
    return value < 0;
  });
  return result;
}
hasNegative(numbers);
console.log(hasNegative(numbers));

console.log("Bài 2:");
const numbers2 = [-1, 2, 3, 4, 7, 8];
function isAllEven(number) {
  const result = number.filter(function (value) {
    return value % 2 === 0;
  });
  return result;
}
isAllEven(numbers2);
console.log(isAllEven(numbers2));

console.log("Bài 3:");
const numbers3 = [-1, 0, 5, 2, 3, 4, 7, 8];
function findDivisibleBy5(number) {
  const result = number.filter(function (value) {
    return value % 5 === 0;
  });
  return result;
}
findDivisibleBy5(numbers3);
console.log(findDivisibleBy5(numbers3));

console.log("Bài 4:");
const numbers4 = [-1, 0, 5, 2, 3, -5, 4, 7, 8];
function findLastNegative(number) {
  const result = number.findLast(function (value) {
    return value < 0;
  });
  return result;
}
findLastNegative(numbers4);
console.log(findLastNegative(numbers4));

console.log("Bài 5:");
const numbers5 = [0, 5, 2, 3, -5, 4, 7, 8];
function findFirstOddIndex(number) {
  const result = number.findIndex(function (value) {
    return value % 2 !== 0;
  });
  return result;
}
findFirstOddIndex(numbers5);
console.log(findFirstOddIndex(numbers5));

console.log("Bài 6:");
const numbers6 = [0, 55, 2, 3, -5, 4, 78, 8];
function findLastGreaterThan50(number) {
  const result = number.findLastIndex(function (value) {
    return value > 50;
  });
  return result;
}
findLastGreaterThan50(numbers6);
console.log(findLastGreaterThan50(numbers6));

console.log("Bài 7:");
const numbers7 = [0, 55, 2];
function sum(number) {
  const result = number.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  return result;
}
sum(numbers7);
console.log(sum(numbers7));

console.log("Bài 8:");
const numbers8 = [2, 5, 2, 3];
function multiplyAll(number) {
  const result = number.reduce(function (acc, cur) {
    return acc * cur;
  });
  return result;
}
multiplyAll(numbers8);
console.log(multiplyAll(numbers8));

console.log("Bài 9:");
const strings = ["An", "Sơn", "Khiêm"];
function longestStringLength(string) {
  const result = string.reduce(function (acc, cur) {
    if (acc.length > cur.length) {
      return acc;
    } else {
      return cur;
    }
  });
  return result;
}
longestStringLength(strings);
console.log(longestStringLength(strings).length);

console.log("Bài 10:");
const numbers10 = [20, 51, 2, 3, 1];
function hasPrime(number) {
  const result = number.filter(function (value) {
    if (value >= 2) {
      if (value == 2 || value == 3 || value == 5 || value == 7) {
        // console.log("Số đã nhập là số nguyên tố.");
        return value;
      } else if (
        value % 2 !== 0 &&
        value % 3 !== 0 &&
        value % 5 !== 0 &&
        value % 7 !== 0
      ) {
        // console.log("Số đã nhập là số nguyên tố.");
        return value;
      }
    }
  });
  return result;
}
hasPrime(numbers10);
console.log(hasPrime(numbers10));
