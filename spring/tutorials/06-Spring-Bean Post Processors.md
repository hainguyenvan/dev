# Spring Bean Post Processors
| Chúng ta có thể định nghĩa một class imlement BeanPostProcessors trước và sau khi instance một bean

# examples
* create file HelloWorldBeanPostProcessors.java
```
package beanpostprocessors;

public class HelloWorldBeanPostProcessors {

    private String message;

    public void setMessage(String message) {
         this.message = message;
    }

    public void getMessage() {
        System.out.println("your message: " + this.message);
    }

    public void init() {
        System.out.println("bean is going through init !");
    }

    public void destroy() {
        System.out.println("bean will destroy now !");
    }
}
```
* create file InitHelloWorldBeanPostProcessors.java
```
package beanpostprocessors;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class InitHelloWorldBeanPostProcessors implements BeanPostProcessor {

    public Object postProcessBeforeInitialization(Object bean, String beanName)
            throws BeansException {
        System.out.println("BeforeInitialization : " + beanName);
        return bean;  // you can return any other object as well
    }

    public Object postProcessAfterInitialization(Object bean, String beanName)
            throws BeansException {

        System.out.println("AfterInitialization : " + beanName);
        return bean;  // you can return any other object as well
    }
}
```

* create file MainAppPostProcessors.java
```
package beanpostprocessors;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainAppPostProcessors {

    public static void main(String[] args) {
        System.out.println("spring bean post processors example");
        AbstractApplicationContext context = new ClassPathXmlApplicationContext("beanpostprocessors/beans.xml");
        HelloWorldBeanPostProcessors beanPostProcessors = (HelloWorldBeanPostProcessors) context.getBean("beanPostProcessors");
        beanPostProcessors.getMessage();
        context.registerShutdownHook();
    }
```
* create file beans.xml
```
<?xml version = "1.0" encoding = "UTF-8"?>

<beans xmlns = "http://www.springframework.org/schema/beans"
       xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation = "http://www.springframework.org/schema/beans
   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

    <bean id = "beanPostProcessors" class = "beanpostprocessors.HelloWorldBeanPostProcessors" init-method="init" destroy-method="destroy">
        <property name = "message" value = "hello world life cycle beans !"/>
    </bean>

    <bean class="beanpostprocessors.InitHelloWorldBeanPostProcessors"/>

</beans>
```
* the result run code
```
spring bean post processors example
BeforeInitialization : beanPostProcessors
bean is going through init !
AfterInitialization : beanPostProcessors
your message: hello world life cycle beans !
bean will destroy now !
```

# ref
* https://www.tutorialspoint.com/spring/spring_bean_post_processors.htm