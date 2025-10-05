const phonebookHashe = {
    TORONTOTOKYO:'322',
    collapse:'88005553535',
}

function getNumberByName (name) {
    return phonebookHashe[name] || null;
}

console.log(getNumberByName('collase'))  