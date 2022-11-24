package com.codriver.ai;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@MapperScan("com.codriver.ai")
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class,args);
    }
}
