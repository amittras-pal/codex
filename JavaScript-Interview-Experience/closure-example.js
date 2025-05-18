// 1. Create a counter 

function counter(initial) {
    let count = initial;
    return function () {
        return count++;
    }
}

// 2. Memoization of a computation using a cache: 
function squarer() {
    const results = {};
    return function (value) {
        if (!results[value]) {
            console.log("Computing Square of: ", value);
            results[value] = value ** 2;
        }
        return results[value];
    }
}

const squareOf = squarer();

console.log(squareOf(2));
console.log(squareOf(4));
console.log(squareOf(5));
console.log(squareOf(2));
console.log(squareOf(4));
console.log(squareOf(5));

console.log("==============================");

const countUp = counter(1);
console.log(countUp());
console.log(countUp());
console.log(countUp());
console.log(countUp());
console.log(countUp());
console.log(countUp());



