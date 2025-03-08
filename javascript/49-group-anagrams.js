/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let hashMap = {};

  for(let i = 0; i < strs.length; i++) {
      let str = strs[i].split("").sort().join("");

      if (str in hashMap) {
          hashMap[str].push(strs[i]);
      } else {
          hashMap[str] = [strs[i]];
      }
  }

  return Object.values(hashMap);
};
