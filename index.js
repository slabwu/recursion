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
    if (n < 2) return [0];
    if (n < 3) return [0, 1];
    let output = fibsRec(n - 1);
    output.push(output[n - 2] + output[n - 3]);
    return output;
}

//console.log(fibs(8));
//console.log(fibsRec(8));

function mergeSort(array) {
    if (array.length === 1) return;
    let left = array;
    let right = left.splice(Math.ceil(array.length / 2), Math.floor(array.length / 2));

    console.log(left);
    console.log(right);
}

mergeSort([4 , 1, 2, 5, 3]);