# Spring Bean Life Cycle
| Spring đã định nghĩa 2 phương thức là init, destroy cho life cycle bean
* Khai báo init-method, destroy-method trong bean

# examples
* create file beans.xml 
```
<?xml version = "1.0" encoding = "UTF-8"?>

<beans xmlns = "http://www.springframework.org/schema/beans"
       xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation = "http://www.springframework.org/schema/beans
   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

    <bean id = "lifeCycle" class = "lifecycle.HelloWorldLifeCycle" init-method="init" destroy-method="destroy">
        <property name = "message" value = "hello world life cycle beans !"/>
    </bean>

</beans>
```

* create file HelloWorldLifeCycle.java
```
package lifecycle;

public class HelloWorldLifeCycle {

    private String message;

    public void setMessage(String message) {
        this.message = message;
    }

    public void getMessage() {
        System.out.println("your message: "+ this.message);
    }

    public void init() {
        System.out.println("bean is going through init !");
    }

     public void destroy() {
         System.out.println("bean will destroy now !");
     }
}
```

* create file MainAppLifeCycle.java
```
package lifecycle;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainAppLifeCycle {

    public static void main(String[] args) {
        System.out.println("spring life cycle example ...");

        ApplicationContext context = new ClassPathXmlApplicationContext("lifecycle/beans.xml");
        HelloWorldLifeCycle lifeCycle = (HelloWorldLifeCycle) context.getBean("lifeCycle");
        lifeCycle.getMessage();
    }
}
```

# ref
* https://www.tutorialspoint.com/spring/spring_bean_life_cycle.htm