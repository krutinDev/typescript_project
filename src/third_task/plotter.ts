import { Logger } from "./logger";

type Point = number;
type Distance = number;
type Angle = number;
type Position = { x: Point; y: Point };

enum CarriageState {
	UP,
	DOWN,
}

export enum LineColor { // Добавляем экспорт для LineColor
	BLACK = "чёрный",
	RED = "красный",
	GREEN = "зелёный",
}

export class Plotter {
	private position: Position;
	private angle: Angle;
	private color: LineColor;
	private carriageState: CarriageState;
	private logger: Logger;

	constructor(logger: Logger) {
		this.position = { x: 0, y: 0 };
		this.angle = 0;
		this.color = LineColor.BLACK;
		this.carriageState = CarriageState.UP;
		this.logger = logger;
	}

	setColor(color: LineColor): void {
		this.color = color;
		this.logger.log(`Устанавливаем ${color} цвет линии.`);
	}

	carriageDown(): void {
		this.carriageState = CarriageState.DOWN;
		this.logger.log("Опускаем каретку");
	}

	carriageUp(): void {
		this.carriageState = CarriageState.UP;
		this.logger.log("Поднимаем каретку");
	}

	move(distance: Distance): void {
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

	turn(angle: Angle): void {
		this.angle = (this.angle + angle) % 360.0;
		this.logger.log(`Поворачиваем на ${angle} градусов`);
	}

	setPosition(position: Position): void {
		this.position = position;
		this.logger.log(
			`Устанавливаем позицию каретки в (${position.x}, ${position.y}).`
		);
	}

	private calcNewPosition(distance: Distance): Position {
		const angleInRads = this.angle * (Math.PI / 180.0);
		const x = this.position.x + distance * Math.cos(angleInRads);
		const y = this.position.y + distance * Math.sin(angleInRads);
		return { x: Math.round(x), y: Math.round(y) };
	}

	private drawLine(from: Position, to: Position): void {
		this.logger.log(
			`...Чертим линию из (${from.x}, ${from.y}) в (${to.x}, ${to.y}) используя ${this.color} цвет.`
		);
	}
}
