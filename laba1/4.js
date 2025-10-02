const test = (arrangement) =>{
    const count = {};
    for (const part of arrangement) {
        const element = typeof part;
        count[element] = (count[element] || 0) + 1;        
    }
    return count;
};

const beta = [null, 1488, 'SS', true, true, 1703, false, () => [], {x:101}];
const res = test(beta);

console.log(res);