import React from "react";

const SpecificReview = async (props: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await props.params;
  return (
    <div>
      The product {productId} and review {reviewId}
    </div>
  );
};

export default SpecificReview;
