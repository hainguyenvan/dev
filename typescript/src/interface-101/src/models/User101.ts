interface User101I {
    toString: () => string;
}

export class User101 implements User101I {

    public fullName: string;
    public age: number;

    constructor(fullName: string, age: number) {
        this.fullName = fullName;
        this.age = age;
    }

    public toString() {
        return `${this.fullName}:${this.age}`;;
    }
}