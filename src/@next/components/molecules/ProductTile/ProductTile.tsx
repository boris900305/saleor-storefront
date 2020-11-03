import React from "react";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  const price =
    product.pricing &&
    product.pricing.priceRange &&
    product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;

  return (
    <S.Wrapper data-cy="product-tile">
      <div className="home-discounted-label category">Rebaja</div>
      <S.Image>
        <Thumbnail source={product} />
      </S.Image>
      <S.Title>{product.name}</S.Title>
      <S.Price>
        <TaxedMoney taxedMoney={price} />
      </S.Price>
    </S.Wrapper>
  );
};
