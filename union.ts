// if we use union (|) in types that means we need to specify the properties of either type in object
 
import { UserInfo , AccountDetails} from "./intersectionType";

let password: string | number = 20;

type User2 = UserInfo | AccountDetails;

const user : User2 = {
    first: 'Misbah',
    last: 'Ubaid',
    age: 23
};

const user2: User2 = {
    email: 'msibah@gmail.com',
    password: 'password123'
}

console.log(`Name: ${user.first} ${user.last}, Age: ${user.age}, Email: ${user2.email}, Password: ${user2.password}`)


const items: (number | string)[] = [1, 2, 3, 'some', 'old'];
console.log(items);