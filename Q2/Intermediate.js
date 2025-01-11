function stringLength(arr) {

  if (arr.length === 0) {
      return null;
  }

  let longestString = '';

  for (let str of arr) {
      if (str.length > longestString.length) {
          longestString = str;
      }
  }

  return longestString;
}

const strings = [];
const result = stringLength(strings);
console.log(result);