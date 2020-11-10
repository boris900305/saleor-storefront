import * as React from "react";
import { Link } from "react-router-dom";

import { Carousel, ProductListItem } from "..";
import { generateProductUrl, maybe } from "../../core/utils";
import { TypedFeaturedProductsQuery } from "./queries";

import "./scss/index.scss";

import Media from "react-media";

import {
  mediumScreen,
} from "../../globalStyles/scss/variables.scss";

interface ProductsFeaturedProps {
  title?: string;
}

const NewFeaturedProducts: React.FC<ProductsFeaturedProps> = ({ title }) => {
  return (
    <TypedFeaturedProductsQuery displayError={false}>
      {({ data }) => {
        const products = maybe(
          () => data.shop.homepageCollection.products.edges,
          []
        );

        if (products.length) {
          return (
            <div className="products-featured">
              <div className="container">
                <h3>{title}</h3>
                <Media
                  query={{ maxWidth: mediumScreen }}
                  render={() => 
                    <Carousel>
                  {products.map(({ node: product }) => (
                    <Link
                      to={generateProductUrl(product.id, product.name)}
                      key={product.id}
                    >
                      <ProductListItem product={product} />
                    </Link>
                  ))}
                </Carousel>
                  } />
              <Media
                  query={{ minWidth: mediumScreen }}
                  render={() => 
                    <Carousel slidesToShow={6}>
                  {products.map(({ node: product }) => (
                    <Link
                      to={generateProductUrl(product.id, product.name)}
                      key={product.id}
                    >
                      <ProductListItem product={product} />
                    </Link>
                  ))}
                </Carousel>
                  } />
              </div>
            </div>
          );
        } else {
          return null;
        }
      }}
    </TypedFeaturedProductsQuery>
  );
};

NewFeaturedProducts.defaultProps = {
  title: "",
};

export default NewFeaturedProducts;
