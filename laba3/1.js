function casino(min, max) {
    if(!max){
        max=min
        min=0
    }
    return Math.floor((Math.random() * max - min) + min)
}

console.log(casino(0, 5))
console.log(casino(15))