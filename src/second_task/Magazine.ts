import { Publisher, Reception } from "./Publisher";
import { Reader } from "./Reader";

export class Magazine extends Publisher implements Reception {
	private issue: number;

	constructor(
		title: string,
		author: string,
		pubYear: number,
		copies: number,
		issue: number
	) {
		super(title, author, pubYear, copies);
		this.issue = issue;
	}

	getIssue(): number {
		return this.issue;
	}
	setIssue(issue: number): void {
		this.issue = issue;
	}

	delivery(reader: Reader): void {
		if (this.copies > 0 && reader.canTakeMoreItems()) {
			this.copies--;
			reader.addItem(this);
			console.log(
				`Magazine "${this.title}" delivered to ${reader.getFullName()}.`
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
			`Magazine "${this.title}" received from ${reader.getFullName()}.`
		);
	}
}
