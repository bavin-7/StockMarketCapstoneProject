package com.example.Natwest.CardService.Repository;

import com.example.Natwest.CardService.Model.UserCardInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


public interface CardInfoRepository extends MongoRepository<UserCardInfo,String > {
    UserCardInfo findByCardId(String cardId);

    UserCardInfo findByUserId(String userId);
}
