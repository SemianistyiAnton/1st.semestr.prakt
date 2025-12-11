const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = sUs(inc, twice, cube); 

console.log(f(5)); 

function sUs (...fns)  {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new Error(`Advice from Sonic. Don't bother me here.`);
        }
    }
    return (x) => {
        return fns.reduce((value, fn) => fn(value), x);
    };
}