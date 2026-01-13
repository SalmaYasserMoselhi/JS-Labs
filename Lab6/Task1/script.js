class Shape {
    static count = 0;

    constructor() {
        Shape.count++;
    }

    static getCount() {
        return Shape.count;
    }

    area() {
        throw new Error("Method area() must be implemented.");
    }

    perimeter() {
        throw new Error("Method perimeter() must be implemented.");
    }

    toString() {
        return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
}

class Rectangle extends Shape {
    static instance = null;

    constructor(width, height) {
        if (Rectangle.instance) {
            return Rectangle.instance;
        }
        super();
        this.width = width;
        this.height = height;
        Rectangle.instance = this;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Shape {
    static instance = null;

    constructor(width) {
        if (Square.instance) {
            return Square.instance;
        }
        super();
        this.width = width;
        Square.instance = this;
    }

    area() {
        return this.width * this.width;
    }

    perimeter() {
        return 4 * this.width;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}


const r1 = new Rectangle(4, 5);
console.log(r1.toString());

const r2 = new Rectangle(6, 7);
console.log(r2.toString());

const sq1 = new Square(4);
console.log(sq1.toString());

const sq2 = new Square(5);
console.log(sq2.toString());

const c = new Circle(3);
console.log(c.toString());

console.log(`Total shapes created: ${Shape.getCount()}`);