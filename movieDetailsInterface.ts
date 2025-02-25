interface MovieDetails {
    readonly name: string,
    ratings: number,
    printMovieInfo(name: string, price: number, ratings: number): string|number ;
}

interface MovieGenra extends MovieDetails{
    genra: string;
}

const m1 : MovieGenra = {
    name: 'Star Wars',
    genra: 'Actions',
    ratings: 8.9,
    printMovieInfo(name: string, price: number, ratings: number): string|number {
        return `Movie Name: ${name} Price: ${price} Ratings: ${ratings}`;
    }
}

console.log(m1.printMovieInfo('John Wick', 100, 8))