function sol(a, b) {
    
    const min = Math.min(a,b)
    const max = Math.max(a,b)
    
    let cnt = 1;
    for (let i = min; i != max; i++){
        const numString = i.toString();
        if (i % 3 === 0 || numString.includes('3') || numString.includes('6') || numString.includes('9')) {
            cnt += 1;
        };
    };
    return cnt;
};

const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [numA,numB] = input.map(Number);

let result = sol(numA,numB);

console.log(result);