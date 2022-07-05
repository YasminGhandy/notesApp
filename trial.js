const person = {
    name: 'yasmin',
    age: 23
}

const personJson = JSON.stringify(person);

const fs = require('fs')
fs.writeFileSync('persons.json',personJson)

let personRetrive = fs.readFileSync('persons.json').toString();

const personObject = JSON.parse(personRetrive);

personObject['name'] = 'Shrouk'
personObject['age'] = 24

personRetrive = JSON.stringify(personObject)
fs.writeFileSync('persons.json',personRetrive)

