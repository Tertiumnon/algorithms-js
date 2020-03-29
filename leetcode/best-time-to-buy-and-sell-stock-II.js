/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const res = [];
  const temp = [];
  const usedItems = [];
  const itemsLen = prices.length;
  for (let i = 0; i < itemsLen; i += 1) {
    const iItem = prices[i];
    for (let j = i + 1; j < itemsLen; j += 1) {
      const jItem = prices[j];
      console.log(iItem, jItem);
      const profit = jItem - iItem;
      if (profit > 0 && !(usedItems.includes(i) || usedItems.includes(j))) {
        usedItems.push(i);
        usedItems.push(j);
        res.push(profit);
      }
    }
  }
  console.log(usedItems);
  return res.reduce((sum, item) => sum += item);
};

// console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
