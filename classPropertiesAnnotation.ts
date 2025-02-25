class Person1 {
    name: string;
    age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const personInfo = new Person1("Misbah", 20);

console.log(personInfo);