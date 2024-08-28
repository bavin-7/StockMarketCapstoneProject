package com.example.Natwest.CardService.VO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private String userId;
    private String fullName;
    private String email;
    private String contactNumber;
    private String address;
    private String employmentStatus ;
    private String employerDetails;
    private String panCard;
    private String password;
    private int creditScore;
}
