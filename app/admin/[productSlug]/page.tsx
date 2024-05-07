import UpdateProductForm from "./updateProductForm";

export const metadata = {
  title: 'Update an active product',
  description: 'Page to update product info as admin user'
}

interface Props {
  params: { productSlug: string };
}

const UpdateProductPage = async ({ params }: Props) => {

  const productDetails = await fetch(`http://${process.env.VERCEL_URL}/product-details/${params.productSlug}`, {
    cache: 'no-store',
  })
    .then(result => result.json());

  return (
    <section>
      <h1>Bienvenido a pantalla de modificación</h1>
      <UpdateProductForm product={productDetails} />
    </section>

  )
};

export default UpdateProductPage;