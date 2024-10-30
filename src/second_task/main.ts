import { Library } from "./Library";
import { Book } from "./Book";
import { Magazine } from "./Magazine";
import { Reader } from "./Reader";

const library = new Library();

const book1 = new Book("Book One", "Author A", 2020, 3, 300);
const book2 = new Book("Book Two", "Author B", 2021, 2, 250);
const magazine1 = new Magazine("Magazine One", "Editor A", 2023, 5, 1);
const magazine2 = new Magazine("Magazine Two", "Editor B", 2023, 3, 2);

library.addPublication(book1);
library.addPublication(book2);
library.addPublication(magazine1);
library.addPublication(magazine2);

library.listPublications();

const reader = new Reader("John", "Doe");

book1.delivery(reader);
book2.delivery(reader);
magazine1.delivery(reader);

book1.receive(reader);
magazine1.receive(reader);

library.listPublications();
