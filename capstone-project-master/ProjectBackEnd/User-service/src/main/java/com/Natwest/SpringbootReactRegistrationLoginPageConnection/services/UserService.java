package com.Natwest.SpringbootReactRegistrationLoginPageConnection.services;

import com.Natwest.SpringbootReactRegistrationLoginPageConnection.model.User;
import com.Natwest.SpringbootReactRegistrationLoginPageConnection.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {
    @Autowired
    public UserRepository userRepository;

    public void registerUser(User user) throws Exception {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new Exception("User with this email already exists");
        }
        String randomUserId = UUID.randomUUID().toString();
        user.setUserId(randomUserId);
        userRepository.save(user);
    }

    public User loginUser(String email, String password) {
        User user = userRepository.findByEmailAndPassword(email, password);

        return user;
    }

    public User findByUserId(String userId) {
        return userRepository.findByUserId(userId);
    }
}
