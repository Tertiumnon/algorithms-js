/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const hashMap = new Map();
  const len = s.length;
  if (len === 1) {
    return 0;
  }
  if (s.length > 0) {
    for (let i = 0; i < len; i += 1) {
      const letter = s[i];
      if (hashMap.has(letter)) {
        hashMap.set(letter, hashMap.get(letter) + 1);
      } else {
        hashMap.set(letter, 1);
      }
    }
    for (let i = 0; i < len; i += 1) {
      const letter = s[i];
      if (hashMap.get(letter) === 1) {
        return i;
      }
    }
  }
  return -1;
};

module.exports = firstUniqChar;
