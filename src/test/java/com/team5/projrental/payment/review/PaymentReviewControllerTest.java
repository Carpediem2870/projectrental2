package com.team5.projrental.payment.review;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.team5.projrental.MockMvcConfig;
import com.team5.projrental.common.Const;
import com.team5.projrental.common.model.ResVo;
import com.team5.projrental.payment.review.model.DelRivewDto;
import com.team5.projrental.payment.review.model.RivewDto;
import com.team5.projrental.payment.review.model.UpRieDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@MockMvcConfig
@Import(PaymentReviewController.class)
class PaymentReviewControllerTest {
    @Autowired
    private MockMvc mvc;

    @MockBean
    private PaymentReviewService service;

    @Autowired
    private ObjectMapper mapper;

    @Test
    void postReview() throws Exception {
        RivewDto dto = new RivewDto();
        dto.setIuser(7);
        dto.setRating(3);
        dto.setContents("테스트1");
        dto.setIpayment(6);

        given(service.postReview(any())).willReturn(1);

        mvc.perform(MockMvcRequestBuilders
                        .post("/api/pay/review")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(dto)))
                .andExpect(status().isOk())
                .andExpect(content().json("{\"result\":1}"));
    }


    @Test
    void patchReview() throws Exception {
        UpRieDto dto = new UpRieDto();
        dto.setContents("변경함");
        dto.setRating(4);
        dto.setIreview(2);
        dto.setIuser(1);

        given(service.patchReview(any(UpRieDto.class))).willReturn(Const.SUCCESS);

        mvc.perform(MockMvcRequestBuilders
                        .patch("/api/pay/review")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(dto)))
                .andExpect(status().isOk())
                .andExpect(content().json("{\"result\":1}"));
    }

    @Test
    void delReview() throws Exception {
        ResVo vo = new ResVo(Const.SUCCESS);
        MultiValueMap<String, String> requestParams = new LinkedMultiValueMap();
        requestParams.add("rev", "2");

        given(service.delReview(any(DelRivewDto.class))).willReturn(Const.SUCCESS);


        mvc.perform(MockMvcRequestBuilders
                        .delete("/api/pay/review")
                        .params(requestParams))
                .andExpect(status().isOk())
                .andExpect(content().string(mapper.writeValueAsString(vo)))
                .andDo(print());

    }
}