interface Person {
    firstName: string;
    lastName?: string;
};

let persona:  Person = {
    firstName: "Juliana",
    lastName: "Mereles",
};

console.log(`Persona: ${persona.firstName} ${persona.lastName}`)