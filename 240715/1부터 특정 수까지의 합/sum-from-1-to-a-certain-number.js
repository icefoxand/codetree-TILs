function sol(n) {
    let sum = 0;
    for (let i = 1; i<= n; i++){
        sum += i
    };
    return sum/10;
};

const fs = require("fs");
let number = Number(fs.readFileSync(0).toString().trim());

const result = sol(number)

console.log(result)