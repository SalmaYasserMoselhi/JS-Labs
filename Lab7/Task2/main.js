import { Book } from "./Book.js";
import { Box } from "./Box.js";

const book1 = new Book("Book1", 10, "Salma", 200, "Publisher1", 5);
const book2 = new Book("Book2", 8, "Malak", 150, "Publisher2", 3);
const book3 = new Book("Book3", 12, "Youssef", 300, "Publisher3", 2);
const book4 = new Book("Book4", 15, "Yassin", 400, "Publisher4", 4);
const book5 = new Book("Book5", 9, "Omar", 250, "Publisher5", 6);

const box1 = new Box(10, 5, 4, "Carton");
const box2 = new Box(6, 4, 3, "Plastic");

box1.addBook(book1);
box1.addBook(book2);
box1.addBook(book3);
box1.addBook(book5);
box2.addBook(book4);

console.log("Box1 has " + box1.countBooks() + " books");
console.log("Box2 has " + box2.countBooks() + " books");

box1.deleteBookByTitle("Book1");
console.log("After deleting Book, Box1 has " + box1.countBooks() + " books");

box1.deleteBookByAuthor("Malak");
console.log("After deleting Book, Box1 has " + box1.countBooks() + " books");

console.log(box1.toString());
console.log("Total books in both boxes: " + (box1 + box2));
