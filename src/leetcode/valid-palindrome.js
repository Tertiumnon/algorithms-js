/**
 * @param {string} s
 * @return {boolean}
 */
const validePalindrome = (s) => {
  const len = s.length;
  const regex = /[a-zA-Z0-9]/g;
  let i = 0;
  let y = len - 1;
  while (i < y) {
    const left = s[i];
    const right = s[y];
    if (left.match(regex) === null) {
      i += 1;
    } else if (right.match(regex) === null) {
      y -= 1;
    } else if (left.toLowerCase() !== right.toLowerCase()) {
      return false;
    } else {
      i += 1;
      y -= 1;
    }
  }
  return true;
};

module.exports = validePalindrome;
