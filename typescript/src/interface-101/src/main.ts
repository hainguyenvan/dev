console.log('demo code interfaces typescript ...');

import { User101 } from './models/User101';
import { SingletonPattern } from './models/singleton';

interface PersonI {
    getFirstName(): string,
    setFirstName(firstName: string): boolean,
    getLastName(): string,
    setLastName(name: string): boolean,
    getFullName(): string,
}

class PersonAbs {
    public firstName: string;
    public lastName: string;
    public age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class UserA extends PersonAbs implements PersonI {

    private address: string;

    constructor(address: string, firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age);
        this.address = address;
    }

    public getFirstName() {
        return this.firstName;
    }

    public setFirstName(firstName: string) {
        this.firstName = firstName;
        return true;
    }

    public getLastName() {
        return this.lastName;
    }

    public setLastName(lastName: string) {
        this.lastName = lastName;
        return true;
    }

    public getFullName() {
        return this.firstName + ":" + this.lastName;
    }

    public getAddress() {
        return this.address;
    }

    public setAddress(address: string) {
        this.address = address
        return true;
    }
}

var userA = new UserA('ha noi', 'hai', 'nv', 25);
console.log('address: ', userA.getAddress());
console.log('full name: ', userA.getFullName());
console.log('first name: ', userA.getFirstName());
console.log('last name: ', userA.getLastName());

console.log('=== user 101 ===');
var user101 = new User101('hainv', 25);
console.log('full name: ', user101.fullName);
console.log('age: ', user101.age);
console.log('toString: ', user101.toString());

console.log('=== singleton pattern ===');
var singleton = SingletonPattern.getInstance();
console.log('singleton: ', singleton);
var singleton = SingletonPattern.getInstance();