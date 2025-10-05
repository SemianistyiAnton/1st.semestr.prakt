function create(name, city) {
    let namo = {name, city};
    namo.name = name;
    namo.city = city;
    return namo;
}

console.log(create('AIA', 'donetsk'));