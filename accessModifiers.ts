class Human {
    private first: string;
    public last: string;
    protected age: number;

    constructor (first: string, last: string, age: number) {
        this.first = first;
        this.last = last;
        this.age = age
        
    }

    getName(): string{
        return `${this.first} ${this.last}, Age: ${this.age}`
    }


}

class PersonInfo extends Human {
    constructor (first: string, last: string, age: number){
        super(first, last, age);
        
    }
}
let p1 = new PersonInfo ('Misbah', 'Ubaid', 20);
console.log(p1)
console.log(p1.getName())