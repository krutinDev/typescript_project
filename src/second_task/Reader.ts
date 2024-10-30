import { Publisher } from "./Publisher";

export class Reader {
	private firstName: string;
	private lastName: string;
	private items: Publisher[] = [];
	private static MAX_ITEMS = 5;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFirstName(): string {
		return this.firstName;
	}
	setFirstName(firstName: string): void {
		this.firstName = firstName;
	}

	getLastName(): string {
		return this.lastName;
	}
	setLastName(lastName: string): void {
		this.lastName = lastName;
	}

	getItems(): Publisher[] {
		return this.items;
	}

	addItem(item: Publisher): void {
		if (this.items.length < Reader.MAX_ITEMS) {
			this.items.push(item);
		}
	}

	removeItem(item: Publisher): void {
		this.items = this.items.filter((i) => i !== item);
	}

	getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	canTakeMoreItems(): boolean {
		return this.items.length < Reader.MAX_ITEMS;
	}
}
