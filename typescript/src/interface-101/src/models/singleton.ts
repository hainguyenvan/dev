export class SingletonPattern {
    public static instance: SingletonPattern;
    public className: string;

    constructor(className: string) {
        this.className = className;
    }

    public static getInstance() {
        if (this.instance === undefined || this.instance === null) {
            this.instance = new SingletonPattern('new');
            console.log('create class ...');
        }
        return this.instance;
    }
}