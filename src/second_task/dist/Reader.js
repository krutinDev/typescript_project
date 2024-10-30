"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reader = void 0;
class Reader {
    constructor(firstName, lastName) {
        this.items = [];
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        if (this.items.length < Reader.MAX_ITEMS) {
            this.items.push(item);
        }
    }
    removeItem(item) {
        this.items = this.items.filter((i) => i !== item);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    canTakeMoreItems() {
        return this.items.length < Reader.MAX_ITEMS;
    }
}
exports.Reader = Reader;
Reader.MAX_ITEMS = 5;
