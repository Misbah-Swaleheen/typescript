type Employee = {
    id: number,
    name: string
}

type Manager = {
    department: string,
    role: string
}

type ManageeWithEmployeeInfo = Employee & Manager;

const manager: ManageeWithEmployeeInfo = {
    id: 1,
    name: 'Bilal',
    department: 'IT',
    role: 'manager'
} 

console.log(manager)
console.log(manager.name)