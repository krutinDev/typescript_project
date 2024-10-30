"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const Publisher_1 = require("./Publisher");
class Book extends Publisher_1.Publisher {
    constructor(title, author, pubYear, copies, pages) {
        super(title, author, pubYear, copies);
        this.pages = pages;
    }
    getPages() {
        return this.pages;
    }
    setPages(pages) {
        this.pages = pages;
    }
    delivery(reader) {
        if (this.copies > 0 && reader.canTakeMoreItems()) {
            this.copies--;
            reader.addItem(this);
            console.log(`Book "${this.title}" delivered to ${reader.getFullName()}.`);
        }
        else {
            console.log(`Cannot deliver "${this.title}". No copies left or reader has max items.`);
        }
    }
    receive(reader) {
        this.copies++;
        reader.removeItem(this);
        console.log(`Book "${this.title}" received from ${reader.getFullName()}.`);
    }
}
exports.Book = Book;
