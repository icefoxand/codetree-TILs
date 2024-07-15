function sol(a, b, c) {
    return Math.min(a,b,c);
};

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [numA,numB,numC] = input.map(Number);

let result = sol(numA,numB,numC);
console.log(result);