package com.team5.projrental.product.model.proc;

import lombok.Data;

import java.time.LocalDate;

@Data
public class GetProductListResultDto {


    private String nick;
    private String userStoredPic;
    private String userRequestPic;

    private Integer iproduct;
    private String title;
    private String prodMainStoredPic;
    private String prodMainRequestPic;
    private Integer rentalPrice;
    private LocalDate rentalStartDate;
    private LocalDate rentalEndDate;
    private String addr;
    private Integer prodLike;
}