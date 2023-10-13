const a = 5;
const b = 5;
const c = 5;

const p = (a + b + c)/2;
const result = Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log(result);