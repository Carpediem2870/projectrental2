package com.team5.projrental.payment.review;

import com.team5.projrental.MockMvcConfig;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

@SpringBootTest
@MockMvcConfig
@Import(PaymentReviewController.class)
class PaymentReviewControllerTest {

    @Test
    void postReview() {

    }

    @Test
    void patchReview() {
    }

    @Test
    void delReview() {
    }
}