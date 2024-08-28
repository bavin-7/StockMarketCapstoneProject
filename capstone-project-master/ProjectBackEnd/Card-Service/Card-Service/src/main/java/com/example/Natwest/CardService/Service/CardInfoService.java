package com.example.Natwest.CardService.Service;

import com.example.Natwest.CardService.Model.UserCardInfo;
import com.example.Natwest.CardService.Repository.CardInfoRepository;
import com.example.Natwest.CardService.VO.ResponseTemplateVO;
import com.example.Natwest.CardService.VO.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Slf4j
public class CardInfoService {
    @Autowired
    private CardInfoRepository cardInfoRepository;
    @Autowired
    private RestTemplate restTemplate;

    public UserCardInfo saveCardInfo(UserCardInfo cardInfo) {
        log.info("Inside saveCardInfo of CardInfoService");
        return cardInfoRepository.save(cardInfo);
    }

    public ResponseTemplateVO getUserCardInfoWithUser(String cardId) {
        log.info("Inside getCardInfoWithUserId of CardInfoService");
        ResponseTemplateVO vo=new ResponseTemplateVO();
        UserCardInfo userCardInfo=cardInfoRepository.findByCardId(cardId);

        User user = restTemplate.getForObject("http://USER-SERVICE/users/" + userCardInfo.getUserId(), User.class);
        vo.setUserCardInfo(userCardInfo);
        vo.setUser(user);

        return vo;
    }

    public UserCardInfo getCardByUserId(String userId) {
        return cardInfoRepository.findByUserId(userId);
    }
}
