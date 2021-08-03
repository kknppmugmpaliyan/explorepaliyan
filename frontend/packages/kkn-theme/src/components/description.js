import React from "react";
import { Head, connect } from "frontity";
import Language from "./constant/language";

const Description = ({ state }) => {
  const data = state.source.get(state.router.link);
  let description = state.frontity.description;

  if (data.isProduct) {
    const productData = state.source[data.type][data.id];
    description = `${productData.product_name} - ${productData.product_description}`;
  } else if (data.isPostType) {
    const postDescription = state.source[data.type][data.id].excerpt.rendered;
    const cleanDescription = postDescription.replace(/<\/?[^>]+(>|$)/g, "");
    description = `${cleanDescription}`;
  } else if (data.is404) {
    description = `404 Not Found - ${state.frontity.description}`;
  } else if (state.router.link == "/product/") {
    description = `Produk UMKM oleh ${Language.indonesian.desaName}`;
  }

  return (
    <Head>
      <meta name="description" content={description} />
    </Head>
  );
};

export default connect(Description);
