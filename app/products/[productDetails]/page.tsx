import React from "react";
import ProductDetailCard from './detailCard';

interface MetadataParam {
  params: { productDetails: string; }
}
export async function generateMetadata({ params }: MetadataParam) {
  return {
    title: `Puerto Montt - Product details`,
    description: `${params.productDetails} details`
  }
}
interface Props {
  params: { productDetails: string };
}

const ProductDetails = ({ params }: Props) => {
  return (
    <ProductDetailCard productDetailsParam={params.productDetails} />
  );
};
export default ProductDetails;