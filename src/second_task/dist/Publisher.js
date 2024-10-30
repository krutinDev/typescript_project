"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
class Publisher {
    constructor(title, author, pubYear, copies) {
        this.title = title;
        this.author = author;
        this.pubYear = pubYear;
        this.copies = copies;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getAuthor() {
        return this.author;
    }
    setAuthor(author) {
        this.author = author;
    }
    getPubYear() {
        return this.pubYear;
    }
    setPubYear(pubYear) {
        this.pubYear = pubYear;
    }
    getCopies() {
        return this.copies;
    }
    setCopies(copies) {
        this.copies = copies;
    }
}
exports.Publisher = Publisher;
