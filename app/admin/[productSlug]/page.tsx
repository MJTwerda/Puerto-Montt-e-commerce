import { INTERNAL_API_URL } from "@/constants/commons";
import ProductForm from "./productForm";

export const metadata = {
  title: 'Update an active product',
  description: 'Page to update product info as admin user'
}

interface Props {
  params: { productSlug: string };
}

const UpdateProductPage = async ({ params }: Props) => {

  const productDetails = await fetch(`${INTERNAL_API_URL}/product-details/${params.productSlug}`, {
    cache: 'no-store',
  })
    .then(result => result.json());

  return (
    <section>
      <h1>Bienvenido a pantalla de modificación</h1>
      <ProductForm product={productDetails} />
    </section>

  )
};

export default UpdateProductPage;