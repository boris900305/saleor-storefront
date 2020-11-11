import * as S from "./styles";
import { IProps } from "./types";
import { isEqual } from "lodash";
import React from "react";
import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  const price =
    product.pricing &&
      product.pricing.priceRange &&
      product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;
    const priceUndiscounted = product.pricing?.priceRangeUndiscounted?.start;

  const showDiscountedLabel = () => {
    if (!isEqual(product.pricing?.priceRange?.start, product.pricing?.priceRangeUndiscounted?.start)) {
      // const discountPercentage = Math.ceil(product.pricing?.discount?.net?.amount/product.pricing?.priceRangeUndiscounted?.start?.net?.amount * 100) ;
      return <div className="home-discounted-label">Rebaja</div>;
    }
  };
  const getProductPrice = () => {
    if (isEqual(price, priceUndiscounted)) {
      return <TaxedMoney taxedMoney={price} />;
    } else {
      return (
        <>

          <TaxedMoney taxedMoney={price} />
          <span className="product-list-item__undiscounted_price">
            <TaxedMoney taxedMoney={priceUndiscounted} />

            
          </span>
        </>
      );
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
        {getProductPrice()}
      </S.Price>
      <S.PriceLabel></S.PriceLabel>
    </S.Wrapper>
  );
};
