const iFace = {
    xD1: b =>[b],
    xD2: function (b, l) {
    return [b, l]
    },
    xD3: function (b, l, y) {
    return [b, l, y]
    },
    xD4: function (b, l, y, a) {
    return [b, l, y, a]
    }
}

function searcher (obj){
    const result = []
    for (const [key, power] of Object.entries(obj)){
    if (typeof power === 'function'){
        result.push([key, power.length])
    }
    }
    return result;
}

console.log(searcher(iFace))