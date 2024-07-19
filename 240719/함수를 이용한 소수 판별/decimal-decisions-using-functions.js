// "단 하나라도" -> boolean 변수를 이용하자.
// 함수를 이용하면, 아직 함수내에 있는 모든 코드를 수행하지 못했어도 return 을 만나는 즉시! 종료시킬수 있다.
// 즉 코드의 양을 줄일 수 있는 것임.
function isPrime(n) {
    // 수가 1이면?
    if (n === 1){
        return false;
    }
    // 수가 1은 아니지만, 2 이상의 수로 나누어떨어지는 경우가 있다면?
    for (let i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
    }

    return true;
}

// 변수 선언 및 입력
const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sumVal = 0;
for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
        sumVal += i;
    }
}

console.log(sumVal);