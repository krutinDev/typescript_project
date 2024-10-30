export interface Logger {
	log(message: string): void;
}

export class LogToConsole implements Logger {
	log(message: string): void {
		console.log(message);
	}
}
