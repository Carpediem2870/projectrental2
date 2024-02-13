package com.team5.projrental.payment.review;

import com.team5.projrental.payment.review.model.*;
import com.team5.projrental.user.model.CheckIsBuyer;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import static org.junit.jupiter.api.Assertions.*;
@Slf4j
@MybatisTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class PaymentReviewMapperTest {
    @Autowired
    private PaymentReviewMapper mapper;
    @Test
    void insReview() {
        RivewDto dto = new RivewDto();
        dto.setIuser(1);
        dto.setRating(3);
        dto.setContents("테스트1");
        dto.setIpayment(45);
        int result = mapper.insReview(dto);

        assertEquals(result, 1);
    }

    @Test
    void selUpProIs() {
        int result = mapper.selUpProIs(46);
        assertEquals(result,0);
    }

    @Test
    void upProductIstatus() {
        int result = mapper.upProductIstatus(45);
        assertEquals(result,2);
    }

    @Test
    void upReview() {
        UpRieDto dto = new UpRieDto();
        dto.setIuser(1);
        dto.setRating(5);
        dto.setContents("변경");
        dto.setIreview(2);
        int result = mapper.upReview(dto);

        assertEquals(result,1);
    }

    @Test
    void delReview() {
        DelRivewDto dto = new DelRivewDto();
        dto.setIstatus(1);
        dto.setIuser(1);
        dto.setIreview(2);

        int result = mapper.delReview(dto);

        assertEquals(result,1);
    }

    @Test
    void selReIstatus() {
        int ipayment = 6;
        int iuser = 1;
        int result = mapper.selReIstatus(ipayment,iuser);
        assertEquals(result,1);
    }

    @Test
    void selReview() {
        int result = mapper.selReview(6,1);
        assertEquals(result,1);
    }

    @Test
    void selBuyRew() {
        CheckIsBuyer vo = mapper.selBuyRew(6,1);
        assertEquals(vo.getIsBuyer(),1);
        assertEquals(vo.getIsExists(),1);
    }

    @Test
    void selPatchRev() {
        RiviewVo vo = mapper.selPatchRev(2);
        assertEquals(vo.getIpayment(),6);
        assertEquals(vo.getIuser(),1);
    }

    @Test
    void selUser() {
        int result = mapper.selUser(6);
        assertEquals(result, 7);
    }

    @Test
    void selRat() {
        SelRatVo vo = mapper.selRat(1);
        assertEquals(vo.getCountIre(),10);
        assertEquals(vo.getRating(),0);
    }

    @Test
    void upRating() {
        UpRating rating = new UpRating();
        rating.setIuser(1);
        rating.setRating(5);
        int result = mapper.upRating(rating);

        assertEquals(result,1);
    }

    @Test
    void sleDelBefor() {
        BeforRatingDto dto = mapper.sleDelBefor(2);
        assertEquals(dto.getRating(),4);
    }
}