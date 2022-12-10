package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserMapper userMapper;

    @PostMapping
    public Integer save(@RequestBody User user){
        return userMapper.insert(user);
    }

    @GetMapping("/")
    public List<User> index(){
        List<User> userList = userMapper.findAll();
        return userList;
    }
}
