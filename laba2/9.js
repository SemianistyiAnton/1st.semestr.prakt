const phonebook = [
    {name:"TORONTOTOKYO", phone:"322"},
    {name:"collapse", phone:"88005553535"},
    { name: "Ігор Іваненко", phone: "+380 63 762 40 86" },
    { name: "Світлана Захаренко", phone: "+380 96 110 50 29" },
    { name: "Юрій Руденко", phone: "+380 67 858 78 55" },
    { name: "Олена Савченко", phone: "+380 99 220 16 51" },
]

function fPBN(name) {
    for (const part of phonebook) {
        if (part.name === name){
        return part.phone
        }
    }
}

console.log(fPBN("collapse"))