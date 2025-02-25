// specify the specific values to the variales as the type after that you cannot assign any other value to the variable

let rgb : 'red' | 'blue' | 'green';
rgb = 'green';

// error
//rgb = 'yellow';

console.log(rgb)

let even: 2 | 4 | 6 | 8 | 10;
even = 8;

//error
// even = 9;

console.log(even)
