package com.example.Natwest.CardService.VO;

import com.example.Natwest.CardService.Model.UserCardInfo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseTemplateVO {
    private User user;
    private UserCardInfo userCardInfo;
}
