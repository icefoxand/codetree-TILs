function isMagicNumber(n) {
    return n % 2 === 0 && (parseInt(n / 10) + (n % 10)) % 5 === 0;
}

// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

if (isMagicNumber(n)) {
    console.log("Yes");
}
else {
    console.log("No");
}