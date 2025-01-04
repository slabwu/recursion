function fibs(n) {
    let a, b, c, output;
    a = 0;
    b = 1;
    output = [];

    if (n >= 2) {
        output.push(0, 1)
    } else {
        return [ 0 ];
    }

    for (let i = 0; i < n - 2; i++) {
        c = a + b;
        a = b;
        b = c;
        output.push(c);
    }

    return output;
}

function fibsRec(n) {
    let output = [];

    let fib = n => {
        if (n === 1) {
            return 0;
        } else if (n === 2 || n === 3) {
            return 1;
        } else {
            return fib(n - 1) + fib(n - 2);
        }
    }

    for (let i = 1; i < n + 1; i++) {
        output.push(fib(i));
    }

    return output;
}

console.log(fibs(8));
console.log(fibsRec(8));