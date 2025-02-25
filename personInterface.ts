interface PersonInformation {
    firstName: string,
    lastName: string,
    age: number,
    sayHello() : void
};

function greeting(person: PersonInformation) {
    console.log(`Hello ${person.firstName} ${person.lastName}`);
    person.sayHello();
}

const prsn: PersonInformation = {
    firstName: 'Misbah',
    lastName: 'Ubaid',
    age: 20,

    sayHello(){
        console.log('Hi There');
    }
}

const prsn1: PersonInformation = {
    firstName: 'Rabia',
    lastName: 'Swaleheen',
    age: 20,

    sayHello(){
        console.log("What's Good");
    }

}

greeting(prsn)
greeting(prsn1)