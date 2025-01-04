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
    if (array.length === 1) return array;
    let left = array;
    let right = left.splice(Math.ceil(array.length / 2), Math.floor(array.length / 2));

    let length = left.length + right.length;
    console.log(`current length = ${length}; left = ${left}; right = ${right}`)
    
    if (length === 2) {
        console.log(`my left is ${left} and my right is ${right}`)
        let meow;
        if (left[0] < right[0]) {
            meow = [left[0], right[0]]
        } else {
            meow = [right[0], left[0]]
        }
        console.log(`new array = ${meow}`)

        return (left[0] < right[0]) ?
            [left[0], right[0]] :
            [right[0], left[0]] ;
    }

    console.log(`left: ${left}`);
    console.log(`right: ${right}`);

    left = mergeSort(left);
    right = mergeSort(right);

    console.log(`new left: ${left}`);
    console.log(` new right: ${right}`);

    console.log(`Time to merge ${left} & ${right}`)
    let output = [];
    for (let i = 0; i < length - 1; i++) {
        console.log(`output = ${output}; left = ${left}; right = ${right}`)
        if (left[0] < right[0]) {
            output.push(left.shift());
            console.log(`new output = ${output}; new left = ${left}; new right = ${right}`)
            if (left.length === 0) {
                output = output.concat(right);
                console.log(`done! add ${right} to ${output}`)
                return output;
            }
        } else {
            output.push(right.shift());
            console.log(`new output = ${output}; new left = ${left}; new right = ${right}`)
            if (right.length === 0) {
                output = output.concat(left);
                console.log(`done! add ${left} to ${output}`)
                return output;
            }
        }
    }
}

console.log(mergeSort([4 , 1, 2, 5 , 3]));