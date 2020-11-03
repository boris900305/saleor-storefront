import "./scss/index.scss";

import isEqual from "lodash/isEqual";
import * as React from "react";

import { Thumbnail } from "@components/molecules";

import { TaxedMoney } from "../../@next/components/containers";
import { BasicProductFields } from "../../views/Product/gqlTypes/BasicProductFields";

export interface Product extends BasicProductFields {
  category?: {
    id: string;
    name: string;
  };
  pricing: {
    discount: {
      gross: {
        amount: number;
        currency: string;
      };
      net: {
        amount: number;
        currency: string;
      };
    };
    priceRange: {
      start: {
        gross: {
          amount: number;
          currency: string;
        };
        net: {
          amount: number;
          currency: string;
        };
      };
    };
    priceRangeUndiscounted: {
      start: {
        gross: {
          amount: number;
          currency: string;
        };
        net: {
          amount: number;
          currency: string;
        };
      };
    };
  };
}

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const { category } = product;
  const price = product.pricing.priceRange.start;
  const priceUndiscounted = product.pricing.priceRangeUndiscounted.start;
  const discount = product.pricing.discount;

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
  const showDiscountedLabel = () => {
    if (!isEqual(price, priceUndiscounted)) {
      const discountPercentage = Math.ceil(discount.net.amount/priceUndiscounted.net.amount * 100) ;
      return <div className="home-discounted-label">Rebaja {discountPercentage}%</div>;
    } 
  };
  return (
    <div className="product-list-item">
      {showDiscountedLabel()}
      <div className="product-list-item__image">
        <Thumbnail source={product} />
      </div>
      <h4 className="product-list-item__title">{product.name}</h4>
      <p className="product-list-item__category">{category.name}</p>
      <p className="product-list-item__price">{getProductPrice()}</p>
    </div>
  );
};

export default ProductListItem;
