class MyClass {
    private _myProperty : number = 0;

    get myProperty() : number {
        return this._myProperty;
    }

    set myProperty (value: number){
        this._myProperty = value;
    }
}

const c1 = new MyClass();

console.log(`Current Value: ${c1.myProperty}`)
c1.myProperty = 10;
console.log(`Current Value: ${c1.myProperty}`)