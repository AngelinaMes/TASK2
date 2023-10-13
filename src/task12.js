const a = 13;
const b = 16;
const c = 18;

const p = (a + b + c) / 2;

const result = Math.sqrt(p * (p - a) * (p - b) * (p - c));

console.log(result);