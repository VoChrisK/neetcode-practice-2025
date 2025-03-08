/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let hashmap = {};

  for(let i = 0; i < s.length; i++) {
      hashmap[s.charAt(i)] = s.charAt(i) in hashmap ? hashmap[s.charAt(i)] + 1 : 1;
  }

  for(let i = 0; i < t.length; i++) {
      hashmap[t.charAt(i)] = t.charAt(i) in hashmap ? hashmap[t.charAt(i)] - 1 : -1;
  }

  let obj = Object.values(hashmap);

  for(let i = 0; i < obj.length; i++) {
      if (obj[i] !== 0) return false;
  }

  return true;
};