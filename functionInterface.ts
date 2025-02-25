interface MathOperation {
    (x: number, y: number) : number;
}

const add: MathOperation = (a, b) => a + b;
const sub: MathOperation = (a, b) => a - b;
const mult: MathOperation = (a, b) => a * b;


console.log(add(6, 7));
console.log(sub(9, 7));
console.log(mult(6, 7));