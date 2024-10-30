import { Publisher } from "./Publisher";

export class Library {
	private publications: Publisher[] = [];

	addPublication(pub: Publisher): void {
		this.publications.push(pub);
		console.log(`Publication "${pub.getTitle()}" added to the library.`);
	}

	removePublication(pub: Publisher): void {
		this.publications = this.publications.filter((p) => p !== pub);
		console.log(
			`Publication "${pub.getTitle()}" removed from the library.`
		);
	}

	listPublications(): void {
		console.log("Library Publications:");
		this.publications.forEach((pub) => {
			console.log(`- ${pub.getTitle()} by ${pub.getAuthor()}`);
		});
	}
}
