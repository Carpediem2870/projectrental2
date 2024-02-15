package com.team5.projrental.product.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.team5.projrental.product.model.proc.GetProductListResultDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ProductUserVo extends ProductListVo {
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Categories icategory;

    public ProductUserVo(GetProductListResultDto dto) {
        super(dto, true);
        this.icategory = dto.getIcategory();
    }

}
