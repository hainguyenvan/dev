# Install GO
* Dowloads go
    * https://golang.org/dl/
* Install ENV
```
# tar -C /usr/local -xzf go1.13.4.linux-amd64.tar.gz
# $HOME/.profile
```
* Create Hello Worlds
```
package main
imprort "fmt"

func main() {
    fmt.Printf("Hello Worlds")
}
```
* Run hello world
```
$ go run helloworld.go
```

# Ref
* https://tour.golang.org/list
* https://golang.org/
* https://www.tutorialspoint.com/go/go_overview.htm