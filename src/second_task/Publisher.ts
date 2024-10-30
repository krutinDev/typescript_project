import { Reader } from "./Reader";

export interface Reception {
	delivery(reader: Reader): void;
	receive(reader: Reader): void;
}

export abstract class Publisher {
	protected title: string;
	protected author: string;
	protected pubYear: number;
	protected copies: number;

	constructor(
		title: string,
		author: string,
		pubYear: number,
		copies: number
	) {
		this.title = title;
		this.author = author;
		this.pubYear = pubYear;
		this.copies = copies;
	}

	getTitle(): string {
		return this.title;
	}
	setTitle(title: string): void {
		this.title = title;
	}

	getAuthor(): string {
		return this.author;
	}
	setAuthor(author: string): void {
		this.author = author;
	}

	getPubYear(): number {
		return this.pubYear;
	}
	setPubYear(pubYear: number): void {
		this.pubYear = pubYear;
	}

	getCopies(): number {
		return this.copies;
	}
	setCopies(copies: number): void {
		this.copies = copies;
	}
}
