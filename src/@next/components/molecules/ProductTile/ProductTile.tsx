import React from "react";
import { IProps } from "./types";
import { isEqual } from "lodash";
import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

import * as S from "./styles";


export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  const price =
    product.pricing &&
    product.pricing.priceRange &&
    product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;

      const showDiscountedLabel = () => {
        if (!isEqual(product.pricing?.priceRange?.start, product.pricing?.priceRangeUndiscounted?.start)) {
          //const discountPercentage = Math.ceil(product.pricing?.discount?.net?.amount/product.pricing?.priceRangeUndiscounted?.start?.net?.amount * 100) ;
          return <div className="home-discounted-label">Rebaja</div>;
        } 
      };

  return (
    <S.Wrapper data-cy="product-tile">
      {showDiscountedLabel()}
      <S.Image>
        <Thumbnail source={product} />
      </S.Image>
      <S.Title>{product.name}</S.Title>
      <S.Price>
        <TaxedMoney taxedMoney={price} />
      </S.Price>
      <S.PriceLabel></S.PriceLabel>
    </S.Wrapper>
  );
};
