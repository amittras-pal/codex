// equality evaluation examples

const a = 10;
const b = 25;
const c = "15";

// Detemine o/p at each console.log location.

console.log(a < b > c); // false
console.log(NaN === NaN); // false

console.log(Object.is({}, {})); // false
console.log(Object.is(+0, -0)); // false

console.log(!isNaN(true)); // true

// ===================================================================

// Define 'x' in a way so that the script prints 'Hello World!' on the console?
let x;

if (x == 1 && x == 2 && x == 3) {
    console.log("Hello World!");
} else {
    console.log("Goodbye World!");
}

/**
 * x = {
 *      val: 1,
 *      valueOf: function () {
 *          return this.val++;
 *     }
 * }
 */