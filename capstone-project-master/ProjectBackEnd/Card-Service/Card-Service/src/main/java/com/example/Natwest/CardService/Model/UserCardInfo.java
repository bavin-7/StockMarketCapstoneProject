package com.example.Natwest.CardService.Model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "User_card_info")
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserCardInfo {
    @Id
    private String cardId;
    private String name;
    private String email;
    private String phoneNumber;
    private String cardNumber;
    private String expiryDate;
    private String cardBalance;
    private String userId;
    private int creditCardId;


}
