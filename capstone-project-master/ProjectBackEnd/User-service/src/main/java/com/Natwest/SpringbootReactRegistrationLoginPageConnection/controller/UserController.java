package com.Natwest.SpringbootReactRegistrationLoginPageConnection.controller;

import com.Natwest.SpringbootReactRegistrationLoginPageConnection.ResponseEntity.LoginResponse;
import com.Natwest.SpringbootReactRegistrationLoginPageConnection.model.User;
import com.Natwest.SpringbootReactRegistrationLoginPageConnection.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    public UserService userService;

    public UserController(UserService userService) {
        this.userService=userService;
    }


    @PostMapping
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            userService.registerUser(user);
            return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("User registration failed: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/login")
    public ResponseEntity<?> loginUser(@RequestParam String email, @RequestParam String password) {
        User user=userService.loginUser(email, password);
        if (user!=null) {
            LoginResponse myResponse=new LoginResponse(user.getUserId(),user.getEmail(),"Login successful");
            return new ResponseEntity<LoginResponse>(myResponse, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Login failed. Please check your credentials.", HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/{id}")
    public User findByUserId(@PathVariable("id") String userId){
        return userService.findByUserId(userId);
    }

}
