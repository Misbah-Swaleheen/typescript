class Box<T>{
    private content: T;

    constructor(initialContent: T){
        this.content = initialContent;
    }

    getContent(): T{
        return this.content
    }

    setContent(newContent: T): void{
        this.content = newContent
    }
}

const box1= new Box<string>('Hello, TypeScript');
console.log(box1);
console.log(box1.getContent());
box1.setContent('New Content')
console.log(box1.getContent());


const box2= new Box<number>(2);
console.log(box2);
console.log(box2.getContent());
box2.setContent(10)
console.log(box2.getContent());