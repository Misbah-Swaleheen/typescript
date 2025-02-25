type User1 = {
    name: string;
    age?: number;
    readonly location: string 

}


const user1: User1 = {
    name: 'Misbah Ubaid',
    location: 'Karachi'
}

// Error
// user1.location = "something"

console.log(`Name: ${user1.name}, Location: ${user1.location}`)