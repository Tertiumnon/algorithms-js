const reverse = (x): string => {
  const y = String(x).split("")
  return y.reverse().join("")
}

console.log(reverse(123))
