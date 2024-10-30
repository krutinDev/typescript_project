"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plotter = exports.LineColor = void 0;
var CarriageState;
(function (CarriageState) {
	CarriageState[(CarriageState["UP"] = 0)] = "UP";
	CarriageState[(CarriageState["DOWN"] = 1)] = "DOWN";
})(CarriageState || (CarriageState = {}));
var LineColor;
(function (LineColor) {
	LineColor["BLACK"] = "\u0447\u0451\u0440\u043D\u044B\u0439";
	LineColor["RED"] = "\u043A\u0440\u0430\u0441\u043D\u044B\u0439";
	LineColor["GREEN"] = "\u0437\u0435\u043B\u0451\u043D\u044B\u0439";
})(LineColor || (exports.LineColor = LineColor = {}));
class Plotter {
	constructor(logger) {
		this.position = { x: 0, y: 0 };
		this.angle = 0;
		this.color = LineColor.BLACK;
		this.carriageState = CarriageState.UP;
		this.logger = logger;
	}
	setColor(color) {
		this.color = color;
		this.logger.log(`Устанавливаем ${color} цвет линии.`);
	}
	carriageDown() {
		this.carriageState = CarriageState.DOWN;
		this.logger.log("Опускаем каретку");
	}
	carriageUp() {
		this.carriageState = CarriageState.UP;
		this.logger.log("Поднимаем каретку");
	}
	move(distance) {
		const newPosition = this.calcNewPosition(distance);
		if (this.carriageState === CarriageState.DOWN) {
			this.drawLine(this.position, newPosition);
		} else {
			this.logger.log(
				`Передвигаем на ${distance} от точки (${this.position.x}, ${this.position.y})`
			);
		}
		this.position = newPosition;
	}
	turn(angle) {
		this.angle = (this.angle + angle) % 360.0;
		this.logger.log(`Поворачиваем на ${angle} градусов`);
	}
	setPosition(position) {
		this.position = position;
		this.logger.log(
			`Устанавливаем позицию каретки в (${position.x}, ${position.y}).`
		);
	}
	calcNewPosition(distance) {
		const angleInRads = this.angle * (Math.PI / 180.0);
		const x = this.position.x + distance * Math.cos(angleInRads);
		const y = this.position.y + distance * Math.sin(angleInRads);
		return { x: Math.round(x), y: Math.round(y) };
	}
	drawLine(from, to) {
		this.logger.log(
			`...Чертим линию из (${from.x}, ${from.y}) в (${to.x}, ${to.y}) используя ${this.color} цвет.`
		);
	}
}
exports.Plotter = Plotter;
