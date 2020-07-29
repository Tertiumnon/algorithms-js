/**
 * @param {character[]} x
 * @return {character[]}
 */
const reverseInteger = (x) => {
  if (x < -2147483648 || x > 2147483647) {
    return 0;
  }
  const res = [...String(x)];
  let m = '';
  if (res[0] === '-') {
    res.shift();
    m = '-';
  }
  const len = res.length;
  for (let i = 0; i < len / 2; i += 1) {
    const el = res[i];
    res[i] = res[len - i - 1];
    res[len - i - 1] = el;
  }
  if (m) {
    res.unshift(m);
  }
  const resN = Number(res.join(''));
  if (resN < -2147483648 || resN > 2147483647) {
    return 0;
  }
  return resN;
};

module.exports = reverseInteger;
