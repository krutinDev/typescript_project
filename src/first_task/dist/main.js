"use strict";
class User {
    constructor(name, login, password, grade) {
        if (grade <= 0) {
            throw new Error("Grade must be a positive number greater than 0");
        }
        this._name = name;
        this._login = login;
        this._password = password;
        this._grade = grade;
        User.count++;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get login() {
        return this._login;
    }
    set login(_) {
        console.log("Невозможно изменить логин!");
    }
    set password(newPassword) {
        this._password = newPassword;
    }
    get password() {
        return "********";
    }
    set grade(_) {
        console.log("Неизвестное свойство grade");
    }
    get grade() {
        return "Неизвестное свойство grade";
    }
    showInfo() {
        console.log(`Name: ${this._name}, Login: ${this._login}`);
    }
    eq(user) {
        return this._grade === user._grade;
    }
    lt(user) {
        return this._grade < user._grade;
    }
    gt(user) {
        return this._grade > user._grade;
    }
}
User.count = 0;
class SuperUser extends User {
    constructor(name, login, password, role) {
        super(name, login, password, 1);
        this._role = role;
        SuperUser.count++;
    }
    get role() {
        return this._role;
    }
    set role(newRole) {
        this._role = newRole;
    }
    showInfo() {
        console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this._role}`);
    }
}
SuperUser.count = 0;
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
