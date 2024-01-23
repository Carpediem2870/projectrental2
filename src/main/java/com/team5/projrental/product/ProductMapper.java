package com.team5.projrental.product;

import com.team5.projrental.product.model.CanNotRentalDate;
import com.team5.projrental.product.model.ProductUpdDto;
import com.team5.projrental.product.model.proc.*;
import com.team5.projrental.product.model.review.ReviewGetDto;
import com.team5.projrental.product.model.review.ReviewResultVo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {

    // for test
    int getIStatus(Integer iproduct);
    //

    //    for test
    int getViewForTest(Integer iproduct);
    //

    //    for test
    int getPicsCountForTest(Integer iproduct);
    //


    //    for test
    List<Integer> getAllIpics(Integer iproduct);
    //

    //
    Integer getRentalPricePerDay(Integer iproduct);
    //

    //
    int checkIuser(Integer iuser);
    //


    //
    int countView(GetProductViewAopDto getProductViewAopDto);
    //

    List<GetProductListResultDto> getProductList(GetProductListDto getProductListDto);

    GetProductResultDto getProduct(GetProductBaseDto getProductBaseDto);

    List<GetProdEctPicDto> getProdEctPics(Integer productPK);


    int insProduct(InsProdBasicInfoDto insProdBasicInfoDto);

    int insPics(InsProdPicsDto insProdPicsDto);

//    List<Integer> getIEupmyun(List<String> eupmyun);

    Integer deletePic(Integer iproduct, List<Integer> delPics);

    UpdProdBasicDto getProductForUpdate(GetProductBaseDto getProductBaseDto);

    int updateProduct(ProductUpdDto productUpdDto);

    int getPicCount(Integer iproduct);

    int changeProdStatus(DelProductBaseDto delProductBaseDto);

    int checkIproduct(Integer iproduct);

    List<ReviewResultVo> getReview(ReviewGetDto dto);

    List<CanNotRentalDate> getLendStartDateAndEndDate(Integer iproduct);

    List<String> getPicsAllBy(List<Integer> ipics);
}
