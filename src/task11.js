const second = 10390;

const hour = Math.floor(second / 3600);

const minute = Math.floor((second - hour * 3600) / 60);

const result = (second - hour * 3600) - minute * 60;

console.log(hour + ' ч\n' +  minute + ' м\n' + result + ' с\n');