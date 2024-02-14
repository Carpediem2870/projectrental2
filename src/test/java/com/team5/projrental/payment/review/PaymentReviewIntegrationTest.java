package com.team5.projrental.payment.review;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.team5.projrental.MockMvcConfig;
import com.team5.projrental.common.Const;
import com.team5.projrental.common.model.ErrorResultVo;
import com.team5.projrental.common.model.ResVo;
import com.team5.projrental.payment.review.model.DelRivewDto;
import com.team5.projrental.payment.review.model.RivewDto;
import com.team5.projrental.payment.review.model.UpRieDto;
import com.team5.projrental.user.model.SigninDto;
import com.team5.projrental.user.model.SigninVo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Transactional
public class PaymentReviewIntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper mapper;

    String token;

    @BeforeEach
    public void before() throws Exception {
        SigninDto dto = new SigninDto();
        dto.setUid("qwqwqw11");
        dto.setUpw("12121212");

        String contentAsString = mockMvc.perform(MockMvcRequestBuilders.post("/api/user")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(dto)))
                .andReturn().getResponse().getContentAsString();
        SigninVo signinVo = mapper.readValue(contentAsString, SigninVo.class);
        this.token = "Bearer " + signinVo.getAccessToken();

    }

    @Test
    void postReview() throws Exception {
        RivewDto dto = new RivewDto();
        dto.setContents("리뷰테스트");
        dto.setIpayment(39);
        dto.setRating(5);
        dto.setIuser(1);

        MvcResult mr = mockMvc.perform(
                        MockMvcRequestBuilders
                                .post("/api/pay/review")
                                .header("Authorization", token)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(mapper.writeValueAsString(dto)))
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();

        String content = mr.getResponse().getContentAsString();
        ResVo vo = mapper.readValue(content, ResVo.class);
        assertEquals(1, vo.getResult());


    }


    @Test
    void patchReview() throws Exception {
        UpRieDto dto = new UpRieDto();
        dto.setContents("변경함");
        dto.setRating(4);
        dto.setIreview(2);
        dto.setIuser(1);

        String json = mapper.writeValueAsString(dto);
        System.out.println("json: " + json);
        MvcResult mr = mockMvc.perform(
                        MockMvcRequestBuilders
                                .patch("/api/pay/review")
                                .header("Authorization", token)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(json))
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();

        String content = mr.getResponse().getContentAsString();
        ResVo vo = mapper.readValue(content, ResVo.class);
        assertEquals(1, vo.getResult());
    }

    @Test
    void delReview() throws Exception {
        MultiValueMap<String, String> requestParams = new LinkedMultiValueMap();
        requestParams.add("rev", "2");

        MvcResult mr = mockMvc.perform(MockMvcRequestBuilders
                        .delete("/api/pay/review")
                        .header("Authorization", token)
                        .params(requestParams))
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();

        String content = mr.getResponse().getContentAsString();
        ResVo vo = mapper.readValue(content, ResVo.class);
        assertEquals(1, vo.getResult());
    }
}