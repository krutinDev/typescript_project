class User {
	private _name: string;
	private _login: string;
	private _password: string;
	private _grade: number;

	static count: number = 0;

	constructor(name: string, login: string, password: string, grade: number) {
		if (grade <= 0) {
			throw new Error("Grade must be a positive number greater than 0");
		}
		this._name = name;
		this._login = login;
		this._password = password;
		this._grade = grade;
		User.count++;
	}

	get name(): string {
		return this._name;
	}

	set name(newName: string) {
		this._name = newName;
	}

	get login(): string {
		return this._login;
	}

	set login(_: string) {
		console.log("Невозможно изменить логин!");
	}

	set password(newPassword: string) {
		this._password = newPassword;
	}

	get password(): string {
		return "********";
	}

	set grade(_: number) {
		console.log("Неизвестное свойство grade");
	}

	get grade(): string {
		return "Неизвестное свойство grade";
	}

	showInfo(): void {
		console.log(`Name: ${this._name}, Login: ${this._login}`);
	}

	eq(user: User): boolean {
		return this._grade === user._grade;
	}

	lt(user: User): boolean {
		return this._grade < user._grade;
	}

	gt(user: User): boolean {
		return this._grade > user._grade;
	}
}

class SuperUser extends User {
	private _role: string;

	static count: number = 0;

	constructor(name: string, login: string, password: string, role: string) {
		super(name, login, password, 1);
		this._role = role;
		SuperUser.count++;
	}

	get role(): string {
		return this._role;
	}

	set role(newRole: string) {
		this._role = newRole;
	}

	showInfo(): void {
		console.log(
			`Name: ${this.name}, Login: ${this.login}, Role: ${this._role}`
		);
	}
}

// Пример использования
const user1 = new User("Paul McCartney", "paul", "1234", 3);
const user2 = new User("George Harrison", "george", "5678", 2);
const user3 = new User("Richard Starkey", "ringo", "8523", 3);
const admin = new SuperUser("John Lennon", "john", "0000", "admin");

user1.showInfo();
admin.showInfo();

console.log(`Всего обычных пользователей: ${User.count}`);
console.log(`Всего супер-пользователей: ${SuperUser.count}`);

console.log(user1.lt(user2)); // false
console.log(admin.gt(user3)); // true
console.log(user1.eq(user3)); // true

user3.name = "Ringo Starr";
user1.password = "Pa$$w0rd";

console.log(user3.name); // Ringo Starr
console.log(user2.password); // ********
console.log(user2.login); // george

user2.login = "geo"; // Невозможно изменить логин!

console.log(user3.grade); // Неизвестное свойство grade
admin.grade = 10; // Неизвестное свойство grade
