import { INTERNAL_API_URL } from "@/constants/commons";
import UpdateProductForm from "./updateProductForm";

export const metadata = {
  title: 'Update an active product',
  description: 'Page to update product info as admin user'
}

interface Props {
  params: { productSlug: string };
}

const UpdateProductPage = async ({ params }: Props) => {

  const productDetails = await fetch(`${INTERNAL_API_URL}/product-details/${params.productSlug}`)
    .then(result => result.json());

  return (
    <section>
      <h1>Bienvenido a pantalla de modificación</h1>
      <UpdateProductForm product={productDetails} />
    </section>

  )
};

export default UpdateProductPage;