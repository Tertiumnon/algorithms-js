function plusMinus (arr) {
  const l = arr.length
  const resArr = [0, 0, 0] // [0]pos, [1]neg, [2]nulls
  arr.forEach(n => {
    if (n > 0) {
      resArr[0] += 1
    } else if (n < 0) {
      resArr[1] += 1
    } else if (n == 0) {
      resArr[2] += 1
    }
  })
  resArr.forEach(n => {
    if (n !== 0) {
      console.log((n / l).toPrecision(6))
    } else {
      console.log(n.toPrecision(7))
    }
  })
}

plusMinus([1, -2, -7, 9, 1, -8, -5])
