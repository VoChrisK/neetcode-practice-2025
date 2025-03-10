/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let obj = {
      ")": "(",
      "]": "[",
      "}": "{",
  }

  for(let i = 0; i < s.length; i++) {
      let curr = s.charAt(i);

      if (curr === "(" || curr === "{" || curr === "[") {
          stack.push(curr);
      } else {
          if (stack.length === 0 || obj[curr] !== stack[stack.length - 1]) {
              return false;
          } else {
              stack.pop();
          }
      }
  }

  return stack.length === 0;
};