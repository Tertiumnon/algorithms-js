/**
 * Write a program that outputs the string representation of numbers
 *  from 1 to n.
 * But for multiples of three it should output “Fizz” instead
 * of the number
 *  and for the multiples of five output “Buzz”. For numbers which
 *  are multiples of both three and five output “FizzBuzz”.
 */

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  const result = [];
  let i = 1;
  while (i <= n) {
    let r = '';
    const b3 = i % 3 === 0;
    const b5 = i % 5 === 0;
    if (b3 && b5) {
      r += 'FizzBuzz';
    } else if (b3) {
      r += 'Fizz';
    } else if (b5) {
      r += 'Buzz';
    } else {
      r = String(i);
    }
    result.push(r);
    i += 1;
  }
  return result;
};

module.exports = fizzBuzz;
