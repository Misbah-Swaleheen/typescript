//Original interface
interface Car {
    brand:string;
    start(): void
}

//Declaration merging (interface extension)
interface Car {
    model:string;
    stop(): void
}

const myCar: Car = {
    brand: 'BMW',
    model: 'M3',
    start(){ console.log('Car Start') },
    stop() { console.log('Car Stop') }
}

myCar.start();
myCar.stop();