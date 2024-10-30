import { Plotter, LineColor } from "./plotter";
import { LogToConsole } from "./logger";

function drawTriangle(plt: Plotter, size: number): void {
	plt.setColor(LineColor.GREEN);
	for (let i = 0; i < 3; ++i) {
		plt.carriageDown();
		plt.move(size);
		plt.carriageUp();
		plt.turn(120.0);
	}
}

const logger = new LogToConsole();
const plotter = new Plotter(logger);
drawTriangle(plotter, 100.0);
