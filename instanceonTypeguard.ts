class Dog1{
    bark() : void{
        console.log(' Woff Woff')
    }
}

class Cat {
    meow() : void{
        console.log('Meow Meow')
    }
}

function animalSound(animal: Dog1 | Cat): void {
    if( animal instanceof Dog1){
        animal.bark()
    }
    else{
        animal.meow()
    }
}

animalSound(new Dog1())
animalSound(new Cat())