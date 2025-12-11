const persons = {
    lenin: { born: 1870, ded: 1924 },
    mao: { born: 1893, ded: 1976 },
    gandhi: { born: 1869, ded: 1948 },
    hirohito: { born: 1901, ded: 1989 },
};
console.log(ages(persons));

function ages (persons){
    const res = {};
    for (const name in persons) {
        const data = persons[name];
        res[name] = data.ded - data.born; 
    }
    return res;
}