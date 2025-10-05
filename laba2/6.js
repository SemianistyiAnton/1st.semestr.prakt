function cal(st, ed) {
    const element = [];
    for (let index = st; index < ed; index++) {
        element.push(average(square(index), cuba(index)));
    }
    console.log(element);
    return element;
}

function average (x, y) {
    let avg = (x + y)/2;
    return avg;
}

function square (s) {
    let sqr = s * s;
    return sqr;
}

function cuba(c) {
    let cb = c * c * c;
    return cb;
}

cal(0, 9);