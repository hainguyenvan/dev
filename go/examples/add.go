package main

import (
	"fmt"
	"time"
)

func add(x int, y int) int {
	return x + y
}

func add1(x, y int) int {
	return x + y
}

func swap(x, y string) (string, string) {
	return y, x
}

func split(sum int) (x, y int) {
	x = sum - 1
	y = sum + 1
	return
}

var c, python, java, javascript bool
var test1, test2 int = 1, 2

const TEST = "test"
const (
	TEST1 = "test1"
	TEST2 = "test2"
)

func forLoop() (sum int) {
	for i := 0; i < 10; i++ {
		sum += i
	}
	return
}

func somefunc() {
	time.AfterFunc(3*time.Second, somefunc)
	fmt.Println("Time out ====================")
}

func forContinued() (sum int) {
	sum = 1
	for sum < 10 {
		if sum%2 == 0 {
			fmt.Println(" done ==========")
		} else {
			fmt.Println(" not good ==============")
		}
		sum += sum
	}
	return
}

func main() {
	fmt.Println(add(1, 2))
	fmt.Println(add1(2, 3))
	firstName, lastName := swap("nv", "hai")
	fmt.Println(firstName, lastName)
	fmt.Println(split(11))
	fmt.Println(c, python, java, javascript)
	fmt.Println(test1, test2)
	fmt.Println("const: ", TEST)
	fmt.Println(TEST1, TEST2)
	fmt.Println("For loop: ", forLoop())
	fmt.Println("For continued: ", forContinued())
	defer somefunc()
	fmt.Println("Done !")
}
