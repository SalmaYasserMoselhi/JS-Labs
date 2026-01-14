export class Book {
    constructor(title, numOfChapters, author, numOfPages, publisher, numOfCopies) {
        this.title = title;
        this.numOfChapters = numOfChapters;
        this.author = author;
        this.numOfPages = numOfPages;
        this.publisher = publisher;
        this.numOfCopies = numOfCopies;
    }

    toString() {
        return `Title: ${this.title}, Chapters: ${this.numOfChapters}, Author: ${this.author}, Pages: ${this.numOfPages}, Publisher: ${this.publisher}, Copies: ${this.numOfCopies}`;
    }
}
