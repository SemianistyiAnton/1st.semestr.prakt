const a = sumOne(1, 2, 3); 
console.log(a); 
const b = sumTwo(0); 
console.log(b); 
const c = sumThree(); 
console.log(c);
const d = sumFour(1, -1, 1); 
console.log(d);
const e = sumFive(10, -1, -1, -1);
console.log(e);

function sumOne(...args) {
    let s = 0;
    for (let i = 0; i < args.length; i++) {
        s += args[i];
    }
    return s;
}

function sumTwo(...args) {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
}

function sumThree(...args) {
    let result = 0;
    let i = 0;
    while (i < args.length) {
        result += args[i];
        i++;
    }
    return result;
}

function sumFour(...args) {
    let result = 0;
    let i = 0;
    do {
        result += args[i];
        i++;
    } while (i < args.length);
    return result;
}

const sumFive = (...args) => {
    return args.reduce((acc, current) => acc + current, 0);
};