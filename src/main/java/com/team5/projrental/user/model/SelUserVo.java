package com.team5.projrental.user.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import static java.util.Spliterator.NONNULL;

@Data
public class SelUserVo {
    private int y;
    private int x;
    private String addr;
    private String restAddr;
    private String nick;
    private String storedPic;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String phone;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String email;
    private int rating;
    private int iauth;

    //

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Long compCode;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String compNm;
}
