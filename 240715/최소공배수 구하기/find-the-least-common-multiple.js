const lines = require("fs").readFileSync(0).toString().trim().split("\n")

lines.forEach(line => {
    const [n, m] = line.split(' ');
    console.log(LCM(n, m));
})

function LCM (n, m) {
    const [max, min] = [Math.max(n, m), Math.min(n, m)];
    return n * m / GCD(max, min);
}

function GCD (max, min) {
    if (min === 1) {
        return min;
    }

    while (min !== 0) {
        const temp = max % min;
        max = min;
        min = temp;
    }
    
    return max;
}