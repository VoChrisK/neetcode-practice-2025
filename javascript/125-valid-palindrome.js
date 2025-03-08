/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  s = s.toLowerCase();
  s = s.split("").filter((char) => alphabet.includes(char)).join("");

  let left = 0;
  let right = s.length - 1;

  while(left < right) {
      while(!alphabet.includes(s.charAt(left)) && left < right) left++;
      while(!alphabet.includes(s.charAt(right)) && left < right) right--;

      if (s.charAt(left++) !== s.charAt(right--)) return false;
  }

  return true;
};