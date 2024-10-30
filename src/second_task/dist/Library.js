"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.publications = [];
    }
    addPublication(pub) {
        this.publications.push(pub);
        console.log(`Publication "${pub.getTitle()}" added to the library.`);
    }
    removePublication(pub) {
        this.publications = this.publications.filter((p) => p !== pub);
        console.log(`Publication "${pub.getTitle()}" removed from the library.`);
    }
    listPublications() {
        console.log("Library Publications:");
        this.publications.forEach((pub) => {
            console.log(`- ${pub.getTitle()} by ${pub.getAuthor()}`);
        });
    }
}
exports.Library = Library;
