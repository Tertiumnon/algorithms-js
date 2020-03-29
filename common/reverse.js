var reverse = function(x) {
  const y = String(x).split('');
  return y.reverse().join('');
};

console.log(reverse(123));
