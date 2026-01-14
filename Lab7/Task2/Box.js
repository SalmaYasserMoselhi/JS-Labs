// Box.js
export class Box {
    constructor(width, height, length, material) {
        this.width = width;
        this.height = height;
        this.length = length;
        this.material = material;
        this.content = [];
        this.numOfBooks = 0;
        this.volume = this.width * this.height * this.length;
    }

    addBook(book) {
        this.content.push(book);
        this.numOfBooks++;
    }

    deleteBookByTitle(title) {
        this.content = this.content.filter(book => book.title !== title);
        this.numOfBooks = this.content.length;
    }

    deleteBookByAuthor(author) {
        this.content = this.content.filter(book => book.author !== author);
        this.numOfBooks = this.content.length;
    }

    countBooks() {
        return this.numOfBooks;
    }

    valueOf() {
        return this.numOfBooks;
    }

    toString() {
        return `Box Dimensions:
Height: ${this.height}
Width: ${this.width}
Length: ${this.length}
Volume: ${this.volume}
Material: ${this.material}
Books inside box:
\t${this.content.map(book => book.toString()).join("\n\t")}
`;
    }
}
