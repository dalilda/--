package com.codriver.ai;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class testCors {
    @RequestMapping("/getcors")
    public String getCors(){
        return "SUCCESS";
    }
}
