function uniqueDataTypeFunc<Type>(item:Type , defaultValue: Type): [Type, Type] {
    return [ item, defaultValue];
}

console.log(uniqueDataTypeFunc<number>(2,10));
console.log(uniqueDataTypeFunc<string>('Hello', 'World'));
console.log(uniqueDataTypeFunc<boolean>(true, false));


interface Dog{
    name: string, 
    breed: string
};

const dog1 = uniqueDataTypeFunc<Dog>({name: 'Buddy', breed: 'Labrador'}, {name: 'Default', breed: 'Unknown'});
console.log(dog1);