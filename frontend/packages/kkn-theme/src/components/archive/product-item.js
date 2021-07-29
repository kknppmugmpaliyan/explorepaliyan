import { connect } from "frontity";
import React from "react";
import { formatProductData } from "../helpers";
import ProductPreview from "./product-preview";

const ProductItem = ({ item }) => {
  const data = formatProductData(item);
  return <ProductPreview data={data} />;
};

export default connect(ProductItem);
