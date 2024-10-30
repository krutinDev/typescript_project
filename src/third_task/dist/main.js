"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plotter_1 = require("./plotter");
const logger_1 = require("./logger");
function drawTriangle(plt, size) {
	plt.setColor(plotter_1.LineColor.GREEN);
	for (let i = 0; i < 3; ++i) {
		plt.carriageDown();
		plt.move(size);
		plt.carriageUp();
		plt.turn(120.0);
	}
}
const logger = new logger_1.LogToConsole();
const plotter = new plotter_1.Plotter(logger);
drawTriangle(plotter, 100.0);
