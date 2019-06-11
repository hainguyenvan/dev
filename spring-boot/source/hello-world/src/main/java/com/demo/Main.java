package com.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;


@SpringBootApplication
@RestController
public class Main implements ApplicationRunner {

    private static final Logger logger = LoggerFactory.getLogger(Main.class);
    private Map<String, Product> productRepo = new HashMap<String, Product>();

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

    @RequestMapping(value = "/products")
    public ResponseEntity<Object> getProducts() {
        Product pro1 = new Product("pro1");
        this.productRepo.put("1",pro1);
        return  new ResponseEntity<Object>("Product is created successfully", HttpStatus.OK);
    }

    @RequestMapping(value = "/products", method = RequestMethod.POST)
    public ResponseEntity<Object> insertProduct(@RequestBody Product product) {
        System.out.println("products: "+ product);
        return new ResponseEntity<Object>("Product is created successfully", HttpStatus.CREATED);
    }
}
