/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NewFeaturedProducts
// ====================================================

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_discount_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_discount_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_discount_gross;
  /**
   * Amount of money without taxes.
   */
  net: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_discount_net;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_net;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_net;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_start_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_start_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_start_net;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_net;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_stop | null;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_discount | null;
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange | null;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: NewFeaturedProducts_shop_homepageCollection_products_edges_node_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: NewFeaturedProducts_shop_homepageCollection_products_edges_node_thumbnail2x | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: NewFeaturedProducts_shop_homepageCollection_products_edges_node_pricing | null;
  category: NewFeaturedProducts_shop_homepageCollection_products_edges_node_category | null;
}

export interface NewFeaturedProducts_shop_homepageCollection_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: NewFeaturedProducts_shop_homepageCollection_products_edges_node;
}

export interface NewFeaturedProducts_shop_homepageCollection_products {
  __typename: "ProductCountableConnection";
  edges: NewFeaturedProducts_shop_homepageCollection_products_edges[];
}

export interface NewFeaturedProducts_shop_homepageCollection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of products in this collection.
   */
  products: NewFeaturedProducts_shop_homepageCollection_products | null;
}

export interface NewFeaturedProducts_shop {
  __typename: "Shop";
  /**
   * Collection displayed on homepage.
   */
  homepageCollection: NewFeaturedProducts_shop_homepageCollection | null;
}

export interface NewFeaturedProducts {
  /**
   * Return information about the shop.
   */
  shop: NewFeaturedProducts_shop;
}
