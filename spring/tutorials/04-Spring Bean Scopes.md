# Spring-Bean Scopes
| Khi chúng ta định nghĩa một bean thì chúng ta có thể khai báo scopes của bean, có 2 scopes hay được sử dụng: prototype, singleton

* Các scopes
    * singleton: là scopes mặc định của Spring IoC comtainer
    * prototype: là scopes khai báo để khởi tạo đối tượng
    * request: là scopes định nghĩa HTTP request, áp dụng cho môi trường web aplication
    * session: là scopes định nghĩa HTTP session, áp dụng cho môi trường web application
    * global-session: là scopes định nghĩa global HTTP session, áp dụng cho môi trường web aplication

# examples
* create folder beans, under folder create file beans.xml
```
<?xml version = "1.0" encoding = "UTF-8"?>

<beans xmlns = "http://www.springframework.org/schema/beans"
       xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation = "http://www.springframework.org/schema/beans
   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

    <bean id = "singletonScopes" class = "scopes.HelloWorldSingleton" scope="singleton">
        <property name = "message" value = "hello world singleton beans !"/>
    </bean>

    <bean id = "prototypeScopes" class = "scopes.HelloWorldPrototype" scope="prototype">
        <property name = "message" value = "message default !"/>
    </bean>

</beans>
```

* create file HelloWorldSingleton.java
```
package scopes;

public class HelloWorldSingleton {

    private String message;

    public void setMessage(String message) {
        this.message = message;
    }

    public void getMessage() {
        System.out.println("Your message: " + this.message);
    }
}
```

* create file HelloWorldPrototype.java
```
package scopes;

public class HelloWorldPrototype {

    private String message;

    public void setMessage(String message) {
        this.message = message;
    }

    public void getMessage() {
        System.out.println("Your message: " + this.message);
    }
}
```
* create file MainAppScopes.java
```
package scopes;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainAppScopes {

    public static void main(String[] args) {
        System.out.println("spring-scopes example ...");

        // scopes
        ApplicationContext context =  new ClassPathXmlApplicationContext("scopes/beans.xml");
        // singleton
        HelloWorldSingleton singletonScopes = (HelloWorldSingleton) context.getBean("singletonScopes");
        singletonScopes.setMessage("update message !");
        singletonScopes.getMessage();

        HelloWorldSingleton newSingletonScopes  = (HelloWorldSingleton) context.getBean("singletonScopes");
        newSingletonScopes.getMessage();

        // prototype
        HelloWorldPrototype prototypeScopes = (HelloWorldPrototype) context.getBean("prototypeScopes");
        prototypeScopes.setMessage("hello world prototype scopes !");
        prototypeScopes.getMessage();

        HelloWorldPrototype newPrototypeScopes = (HelloWorldPrototype) context.getBean("prototypeScopes");
        newPrototypeScopes.getMessage();

    }
}
```

# ref
* https://www.tutorialspoint.com/spring/spring_bean_scopes.htm