import React from "react";

const IndividualProduct = async (props: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await props.params).productId;
  console.log(productId);
  return <div>IndividualProduct - {productId}</div>;
};

export default IndividualProduct;
