package com.team5.projrental.payment.review;

import com.team5.projrental.payment.review.model.DelRivewDto;
import com.team5.projrental.payment.review.model.RivewDto;
import com.team5.projrental.payment.review.model.RiviewVo;
import com.team5.projrental.payment.review.model.UpRieDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PaymentReviewMapper {
    int insReview(RivewDto dto);
    int upProductIstatus(Integer ipayment);
    int upReview(UpRieDto dto);
    int delReview(DelRivewDto dto);

    int selReview(Integer iuser, Integer ipayment);
    int selBuyRew(Integer iuser);
    RiviewVo selPatchRev(Integer ireview);
}
