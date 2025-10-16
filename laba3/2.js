const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

function passwordGen(length, characters) {
    let password = ""
    for (let index = 0; index < length; index++) {
        let element = random(characters.length)
        password += characters.charAt(element)
    }
    return password
}

function random(max) {
    return Math.floor(Math.random() * max)
}

console.log(passwordGen(16, characters))