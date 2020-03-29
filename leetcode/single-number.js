var singleNumber = function(nums) {
  const res = new Set();
  nums.forEach(n => {
    if (res.has(n)) {
      res.delete(n);
    } else {
      res.add(n);
    }
  });
  return res.values().next().value;
};

console.log(singleNumber([2,2,1]));
