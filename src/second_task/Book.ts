import { Publisher, Reception } from "./Publisher";
import { Reader } from "./Reader";

export class Book extends Publisher implements Reception {
	private pages: number;

	constructor(
		title: string,
		author: string,
		pubYear: number,
		copies: number,
		pages: number
	) {
		super(title, author, pubYear, copies);
		this.pages = pages;
	}

	getPages(): number {
		return this.pages;
	}
	setPages(pages: number): void {
		this.pages = pages;
	}

	delivery(reader: Reader): void {
		if (this.copies > 0 && reader.canTakeMoreItems()) {
			this.copies--;
			reader.addItem(this);
			console.log(
				`Book "${this.title}" delivered to ${reader.getFullName()}.`
			);
		} else {
			console.log(
				`Cannot deliver "${this.title}". No copies left or reader has max items.`
			);
		}
	}

	receive(reader: Reader): void {
		this.copies++;
		reader.removeItem(this);
		console.log(
			`Book "${this.title}" received from ${reader.getFullName()}.`
		);
	}
}
