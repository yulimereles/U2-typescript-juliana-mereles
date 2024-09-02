interface Person{
    firstName: string;
    lastName?: string;
}
const person: Person = {
    firstName: 'Juliana'
    //lastName es pcional
}

console.log(`Persona: ${person.firstName} `)