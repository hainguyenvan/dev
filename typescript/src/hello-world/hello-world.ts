var message: string = "hello world";
console.log("message: ", message);

class Greeting {
    greet(): void {
        console.log("hello world !!");
    }
}

var obj = new Greeting();
obj.greet();