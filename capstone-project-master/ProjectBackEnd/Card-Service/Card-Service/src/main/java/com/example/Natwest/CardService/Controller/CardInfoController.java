package com.example.Natwest.CardService.Controller;

import com.example.Natwest.CardService.Model.UserCardInfo;
import com.example.Natwest.CardService.Repository.CardInfoRepository;
import com.example.Natwest.CardService.Service.CardInfoService;
import com.example.Natwest.CardService.VO.ResponseTemplateVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/cardinfo")
@Slf4j
public class CardInfoController {
    @Autowired
    private CardInfoService cardInfoService;

    @PostMapping("/{id}")
    public UserCardInfo saveCardInfo(@RequestBody UserCardInfo cardInfo, @PathVariable("id") String userId) {
        // Generate cardNumber, expiryDate, and other required fields
        // (You can use a random card number generator and set the expiry date as per your requirement)
        cardInfo.setCardNumber(generateRandomCardNumber());
        cardInfo.setExpiryDate(generateDate()); // Set the expiry date as needed
        cardInfo.setCardBalance("Rs.20000");
        cardInfo.setUserId(userId);
        cardInfo.setCreditCardId(cardInfo.getCreditCardId());
        log.info("Inside saveCardInfo method of CardInfoRepository");
        return cardInfoService.saveCardInfo(cardInfo);
    }
//    @GetMapping
//    public ResponseEntity<List<UserCardInfo>> viewAllUsers() {
//        // Retrieve all user card information from the database
//        List<UserCardInfo> allUsers = cardInfoRepository.findAll();
//
//        if (!allUsers.isEmpty()) {
//            // Return a 200 OK response with the list of all user card information
//            return ResponseEntity.ok(allUsers);
//        } else {
//            // Return a 404 Not Found response if there are no users
//            return ResponseEntity.notFound().build();
//        }
//    }

    @GetMapping("/{id}")
    public UserCardInfo getUserCard(@PathVariable("id") String userId) {
        return cardInfoService.getCardByUserId(userId);
    }
    private String generateDate() {
        Random random = new Random();
        int month = random.nextInt(12) + 1; // Generates a random month between 1 and 12
        int year = 30; // The year is always 30

        return month + "/" + year;
    }

    private String generateRandomCardNumber() {
        Random random = new Random();
        StringBuilder cardNumber = new StringBuilder("4"); // Starting with 4 for Visa cards

        for (int i = 1; i < 16; i++) {
            int digit = random.nextInt(10); // Generate a random digit (0-9)
            cardNumber.append(digit);
        }

        return cardNumber.toString();
    }
}
