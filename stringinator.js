const _ = require('./underbar');

const first = function(str, n=1) {
  return n === 1 ? str[0] : str.slice(0, n);
};

const last = function(str, n = 1) {
  return n === 1 ? str[str.length - 1] : str.slice(Math.max(0, str.length - n));

};

const removeChar = function(str, target) {

  let res = str.replace(target, "");
  return res;
};

const hasChar = function(str, target) {
};

const isOnlyDigits = function(str) {
  for (let i = 0; i < str.length; i++){
    if(!(parseInt(str[i]) in [0,1,2,3,4,5,6,7,8,9])){
      return false;
    }
  }
  return true;
};

const filterToOnlyDigits = function(str) {
  let result = [];
  for (let i = 0; i < str.length; i++){
    if(parseInt(str[i]) in [0,1,2,3,4,5,6,7,8,9]){
      result.push(str[i]);
    }
  }
  return result.join('');
};

const truncateString = function(val, maxLength) {
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  let result = [];
  for(let key in obj){
   result.push(truncateString(obj[key], maxLength));
  }
  return result;
};

const countChars = function(str) {
  let expected = {};
  
  for (let i = 0; i < str.length; i++){
    if (!expected[`${str[i]}`]) {
      let count = 1;
      for(let k = i+1; k < str.length; k++){
        if(str[i] === str[k]) {
          count++;
        }
      }
      expected[str[i]] = count;
    }
  }
  return expected;
};


const dedup = function(str) {
  let result = ''; 
  let flag;
  for(let i = 0; i < str.length; i++){
    flag = 0;
    for(let k = 0; k < result.length; k++){
      if(str[i] === result[k]){
        flag = 1;
        break;
      }
    }
    if(flag !== 1){
      result += str[i];
    }

  }
    if(result === str){
      return str;
    }
  return result;
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};