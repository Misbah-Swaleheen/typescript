//Define person object
const person1: {firstName: string; lastName: string; age: number} = {
    firstName: 'Misbah',
    lastName: 'Ubaid',
    age: 22
}

console.log(`Name: ${person1.firstName} ${person1.lastName}, Age: ${person1.age}`);


//Define function 
function printUser(): {name: string; age: number; location: string } {
    return {
        name: 'Misbah Ubaid',
        age: 22,
        location: 'Karachi'
    }
}

const result1 = printUser();
console.log(result1);