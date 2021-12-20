/**
 * @param {string} input
 * @returns string
 */
const removeChars = (input) => {
  let result = '';
  const inputLen = input.length;
  for (let i = 0; i < inputLen; i += 1) {
    const inputItem = input[i];
    const nextInputItem = input[i + 1];
    if (inputItem !== 'b') {
      if (inputItem === 'a' && nextInputItem && nextInputItem === 'c') {
        i += 1;
      } else {
        result += inputItem;
      }
    }
  }
  return result.search('ac') !== -1 ? removeChars(result) : result;
};

module.exports = removeChars;
