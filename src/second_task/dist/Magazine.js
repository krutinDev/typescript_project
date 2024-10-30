"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
const Publisher_1 = require("./Publisher");
class Magazine extends Publisher_1.Publisher {
    constructor(title, author, pubYear, copies, issue) {
        super(title, author, pubYear, copies);
        this.issue = issue;
    }
    getIssue() {
        return this.issue;
    }
    setIssue(issue) {
        this.issue = issue;
    }
    delivery(reader) {
        if (this.copies > 0 && reader.canTakeMoreItems()) {
            this.copies--;
            reader.addItem(this);
            console.log(`Magazine "${this.title}" delivered to ${reader.getFullName()}.`);
        }
        else {
            console.log(`Cannot deliver "${this.title}". No copies left or reader has max items.`);
        }
    }
    receive(reader) {
        this.copies++;
        reader.removeItem(this);
        console.log(`Magazine "${this.title}" received from ${reader.getFullName()}.`);
    }
}
exports.Magazine = Magazine;
