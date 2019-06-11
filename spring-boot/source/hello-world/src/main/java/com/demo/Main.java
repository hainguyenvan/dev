package com.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@SpringBootApplication
@RestController
public class Main implements ApplicationRunner {

    private static final Logger logger = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {
        logger.info("Run example demo !");
        SpringApplication.run(Main.class, args);
    }

    @Override
    public void run(ApplicationArguments arg0) throws Exception {
        System.out.println("args0: "  + arg0);
        System.out.println("Hello World from Application Runner");
    }

    @RequestMapping(value = "/")
    public String hello() {
        return "hello world !";
    }
}
