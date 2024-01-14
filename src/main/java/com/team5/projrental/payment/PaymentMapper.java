package com.team5.projrental.payment;

import com.team5.projrental.payment.model.PaymentInsDto;
import com.team5.projrental.payment.model.PaymentListVo;
import com.team5.projrental.payment.model.proc.DelPaymentDto;
import com.team5.projrental.payment.model.proc.GetInfoForCheckIproductAndIuserResult;
import com.team5.projrental.payment.model.proc.GetPaymentListDto;
import com.team5.projrental.payment.model.proc.GetPaymentListResultDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PaymentMapper {
    // for test
    int getPaymentFromProductPayment(int iproduct, int ipayment);
    int getProductFromProductPayment(int iproduct, int ipayment);
    //

    int insPayment(PaymentInsDto paymentInsDto);

    int insProductPayment(Integer iproduct, Integer ipayment);

    GetInfoForCheckIproductAndIuserResult checkIuserAndIproduct(Integer ipayment);

    int delPayment(DelPaymentDto delPaymentDto);

    List<GetPaymentListResultDto> getPaymentList(GetPaymentListDto getPaymentListDto);
}
