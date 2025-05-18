// ====================== 

let length = 40;
function printSomething() {
    return this.length;
}

const data = [printSomething, "A", 10];
console.log(data[0](this)); // 3
console.log(data[0]()); // 3