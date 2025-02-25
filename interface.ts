// for Objects 

interface Computer {
    name: string,
    ram: number,
    hdd: number
}

const ComputerExample: Computer = {
    name: 'i7',
    ram: 8,
    hdd: 100
};

console.log(ComputerExample)
console.log(ComputerExample.name)
console.log(ComputerExample.ram)
console.log(ComputerExample.hdd)

