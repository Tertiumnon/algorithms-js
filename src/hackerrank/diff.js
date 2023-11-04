function diff (arr) {
  const newArr = [0, 0]
  const arrL = arr.length
  for (let i = 0; i < arrL; i++) {
    newArr[0] += arr[i][i]
    newArr[1] += arr[arrL - i - 1][i]
  }
  return Math.abs(newArr[0] - newArr[1])
}
