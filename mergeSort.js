function mergeSort(array) {
    if (array.length === 1) return array;
    let left = array;
    let right = left.splice(Math.ceil(array.length / 2), Math.floor(array.length / 2));

    let length = left.length + right.length;    
    if (length === 2) {
        return (left[0] < right[0]) ?
            [left[0], right[0]] :
            [right[0], left[0]] ;
    }

    left = mergeSort(left);
    right = mergeSort(right);

    let output = [];
    for (let i = 0; i < length - 1; i++) {
        if (left[0] < right[0]) {
            output.push(left.shift());
            if (left.length === 0) {
                output = output.concat(right);
                return output;
            }
        } else {
            output.push(right.shift());
            if (right.length === 0) {
                output = output.concat(left);
                return output;
            }
        }
    }
}

console.log(mergeSort([4 , 1, 2, 5, 3]));