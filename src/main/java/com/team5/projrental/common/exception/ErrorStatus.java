package com.team5.projrental.common.exception;

import lombok.Getter;

@Getter
public enum ErrorStatus {
    ILLEGAL_EX_MESSAGE(499),
    ILLEGAL_PRODUCT_PICS_EX_MESSAGE(498),
    ILLEGAL_CATEGORY_EX_MESSAGE(497),
    ILLEGAL_PAYMENT_EX_MESSAGE(496),
    ILLEGAL_STATUS_EX_MESSAGE(495),
    ILLEGAL_RANGE_EX_MESSAGE(494),
    c(493),
    //
    BUY_DATE_MUST_BE_LATER_THAN_TODAY_EX_MESSAGE(479),
    RENTAL_DATE_MUST_BE_BEFORE_THAN_TODAY_EX_MESSAGE(478),
    RENTAL_END_DATE_MUST_BE_AFTER_THAN_RENTAL_START_DATE_EX_MESSAGE(477),
    CAN_NOT_BLANK_EX_MESSAGE(476),
    AUTHENTICATION_FAIL_EX_MESSAGE(475),
    CAN_NOT_DEL_USER_EX_MESSAGE(474),
    REVIEW_ALREADY_EXISTS_EX_MESSAGE(473),
    //
    NO_SUCH_USER_EX_MESSAGE(459),
    NO_SUCH_PRODUCT_EX_MESSAGE(458),
    NO_SUCH_PAYMENT_EX_MESSAGE(457),
    NO_SUCH_PASSWORD_EX_MESSAGE(456),
    NO_SUCH_ID_EX_MESSAGE(455),
    NO_SUCH_REVIEW_EX_MESSAGE(454),
    //
    BAD_ADDRESS_INFO_EX_MESSAGE(439),
    BAD_INFO_EX_MESSAGE(438),
    BAD_SORT_EX_MESSAGE(437),
    BAD_RENTAL_DEL_EX_MESSAGE(436),
    BAD_RENTAL_CANCEL_EX_MESSAGE(435),
    BAD_DIV_INFO_EX_MESSAGE(434),
    BAD_PIC_EX_MESSAGE(433),
    BAD_ID_EX_MESSAGE(432),
    BAD_PRODUCT_INFO_EX_MESSAGE(431),
    BAD_TYPE_EX_MESSAGE(430),
    BAD_WORD_EX_MESSAGE(429),
    BAD_PRODUCT_ISTATUS_EX_MESSAGE(428),
    BAD_NICK_EX_MESSAGE(427),
    BAD_AUTHORIZATION_EX_MESSAGE(426),
    BAD_SAME_USER_MESSAGE(425),

    //
    ALL_INFO_NOT_EXISTS_EX_MESSAGE(419),
    //
    SERVER_ERR_MESSAGE(500);


    private int code;

    ErrorStatus(int code) {
        this.code = code;
    }

}
