package com.Natwest.SpringbootReactRegistrationLoginPageConnection.ResponseEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponse {
    private String userId;
    private String userEmail;
    private String message;
}
