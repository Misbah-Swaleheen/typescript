function printNumber(item: number, defaultValue: number) : [number, number]{
    return [item, defaultValue];
}

function printString(item: string, defaultValue: string) : [string, string]{
    return [item, defaultValue];
}

function printBoolean(item: boolean, defaultValue: boolean) : [boolean, boolean]{
    return [item, defaultValue];
}


const num = printNumber(12, 20);
const string = printString('Hello', 'World');
const bool = printBoolean(true, false);
console.log(num)
console.log(string)
console.log(bool)