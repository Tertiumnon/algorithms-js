var fizzBuzz = function(n) {
    const res = [];
    let i = 1;
    while (i <= n) {
        let r = '';
        const b3 = (i % 3 == 0);
        const b5 = (i % 5 == 0);
        if (b3 && b5) {
            r += 'FizzBuzz';
        } else if (b3) {
            r += 'Fizz';
        } else if (b5) {
            r += 'Buzz';
        } else {
            r = String(i);
        }
        res.push(r);
        i += 1;
    }
    return res;
};

console.log(fizzBuzz(15));
