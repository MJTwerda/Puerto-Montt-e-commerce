import React from "react";
import { Suspense } from "react";
import ProductDetailCard from './detailCard';
import { INTERNAL_API_URL } from '../../../constants/commons';
import CommonLoader from "@/app/components/commonLoader";

export const metadata = {
  title: `Puerto Montt - Product details`,
  description: 'View product details'
};

interface Props {
  params: { productDetails: string };
}

const ProductDetails = async ({ params }: Props) => {
  // TODO: Agregar mensaje en caso de no encontrar un registro
  const productDetails = await fetch(`${INTERNAL_API_URL}/product-details/${params.productDetails}`, {
    cache: 'force-cache',
    next: {
      revalidate: 1800000 // Media hora
    }
  }).then(result => result.json());

  return (
    <Suspense fallback={
      <CommonLoader
        imageAlt="Cargando contenido"
        imageHeight={35}
        imageWidth={35}
        imageSrc="/loading-glass.png"
        label="...cargando detalle"
      />
    }>
      <div>
        {productDetails ? (
          <ProductDetailCard productDetailsParam={productDetails} />
        ) : <h4>:/ No es posible visualizar el producto, intenta más tarde</h4>}
      </div>
    </Suspense>
  );
};
export default ProductDetails;