function name(strt, end) {
    
    const element = [];

    for (let index = strt; index < end; index++) {
    
        if (index % 2) {
            element.push(index);
        }
    }
    
    console.log(element);
    return element;
}

name(15, 30);