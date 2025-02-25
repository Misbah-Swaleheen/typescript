// if we use union (|) in types that means we need to specify the properties of both types in object

export type UserInfo = {
    first: string;
    last: string;
    age: number;
};

export type AccountDetails = {
    email: string;
    password: string;
}

type UserDetails = UserInfo & AccountDetails;

const userDetails: UserDetails = {
    first: 'Misbah',
    last: 'Ubaid',
    age: 22,
    email: 'misbah@gmail.com',
    password: 'password123'
};

console.log(`Name: ${userDetails.first} ${userDetails.last}, Age: ${userDetails.age}, Email: ${userDetails.email}, Password: ${userDetails.password}`)
