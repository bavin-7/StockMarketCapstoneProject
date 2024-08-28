package com.Natwest.SpringbootReactRegistrationLoginPageConnection.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name="User_data")
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    private String userId;

    private String fullName;
    private String email;
    private String contactNumber;
    private String address;
//    private String dob;
    private String employmentStatus ;
    private String employerDetails;
    private String panCard;
    private String password;
    private int creditScore;

}
