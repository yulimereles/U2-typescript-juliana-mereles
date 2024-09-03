interface Person{
    firstName: string;
    lastName?: string;
}
const person: Person = {
    firstName: 'Juliana'
}

console.log(`Persona: ${person.firstName} `)