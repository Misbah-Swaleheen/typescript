function filterArray<T>(array:T[], condition: (item: T) => boolean): T[] {
    return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterArray<number>(numberArray, (num) => num % 2 === 0))
console.log(filterArray<number>(numberArray, (num) => num % 2 !== 0))

const stringArray = ['apple', 'banana', 'cherry', 'date'];
const shortWords = filterArray<string>(stringArray, (word) => word.length < 6)
console.log(shortWords);

interface Fruit {
    name: string,
    color: string
}

const fruitArray = [
    {name: 'apple', color: 'Red'},
    {name: 'banana', color: 'Yellow'},
    {name: 'cherry', color: 'Red'},
    {name: 'date', color: 'Brown'}
]

const redFruit = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === 'Red');
console.log(redFruit) 