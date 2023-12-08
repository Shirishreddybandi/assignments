/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  str=str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, ''); 
  let i=0;
  let len=str.length;
  while(i< (len/2)){
    if(str[i]!=str[len-1-i])return false;
    i++;
  }
  return true;
}

module.exports = isPalindrome;
