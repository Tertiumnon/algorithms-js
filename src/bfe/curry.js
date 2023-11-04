/**
 * Currying is a useful technique used in JavaScript applications.
 * Please implement a curry() function, which accepts a function and return a curried one.
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry (fn) {
  return function curried (...args) {
    if (args.length >= fn.length) {
      return fn.apply(null, args)
    }
    return function (...args2) {
      return curried.apply(null, args.concat(args2))
    }
  }
}

const join = (a, b, c) => `${a}_${b}_${c}`

const curriedJoin = curry(join)

export default curriedJoin
