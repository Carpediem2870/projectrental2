package com.team5.projrental.mypage;

import com.team5.projrental.common.security.AuthenticationFacade;
import com.team5.projrental.mypage.model.*;
import com.team5.projrental.product.model.review.ReviewResultUserInfoDto;
import com.team5.projrental.product.model.review.ReviewResultVo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MypageService {
    private final MypageMapper mapper;
    private final AuthenticationFacade authenticationFacade;

    public List<PaymentSelVo> paymentList(PaymentSelDto dto){
        int loginUserPk = authenticationFacade.getLoginUserPk();
        dto.setLoginedIuser(loginUserPk);

        return mapper.getPaymentList(dto);
    }

    public List<MyBuyReviewListSelVo> selIbuyerReviewList(MyBuyReviewListSelDto dto){
        int loginUserPk = authenticationFacade.getLoginUserPk();
        dto.setIuser(loginUserPk);

        if (dto.getIuser()==0) {

        }

        List<MyBuyReviewListSelVo> list = mapper.getIbuyerReviewList(dto);

        return list;
    }

    public List<MyFavListSelVo> selMyFavList(MyFavListSelDto dto) {
        int loginUserPk = authenticationFacade.getLoginUserPk();
        dto.setLoginedIuser(loginUserPk);

        return mapper.getFavList(dto);
    }

    public List<AllReviewsForMeResultDto> getAllReviewFromMyProduct() {
        return mapper.getAllReviewFromMyProduct(authenticationFacade.getLoginUserPk());
    }


}
