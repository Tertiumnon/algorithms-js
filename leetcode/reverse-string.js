/**
 * @param {character[]} s
 * @return {character[]}
 */
const reverseString = (s) => {
  const len = s.length;
  const res = [...s];
  for (let i = 0; i < len / 2; i += 1) {
    const el = res[i];
    res[i] = res[len - i - 1];
    res[len - i - 1] = el;
  }
  return res;
};

module.exports = reverseString;
