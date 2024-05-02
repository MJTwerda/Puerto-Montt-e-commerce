import styles from './admin.module.css';
import { INTERNAL_API_URL } from '@/constants/commons';
import { MOCK_CATEGORIES } from '@/constants/products';
import { Product } from '@/interfaces/product';
import Image from 'next/image';
import ActionsCell from './actionsCell';
import axios from 'axios';

export const metadata = {
  title: 'Admin page',
  description: 'User admin page'
};

const AdminPage = async () => {

  // Headers de la tabla. El orden debe coincidir con el tbody
  const tableHeaders: string[] = ['Slug', 'Nombre', 'Precio', 'En Stock', 'Categoría', 'Imagen principal', 'Descripción', 'Acciones'];

  const productList = await axios({
    method: 'GET',
    url: `${INTERNAL_API_URL}/product-list/${MOCK_CATEGORIES.todos.value}`
  }).then(({ data }) => {
    // TODO: Revisa cómo hacer para obtener la info actualizada al volver a esta pantalla desde update
    return data;
  });

  return (
    <section>
      <h1 className={styles['admin-title']}>Página de administración</h1>
      <div className={styles["table-container"]}>
        <table className={styles["product-table"]}>
          <thead>
            <tr>
              {tableHeaders.map(headerSlug => (
                <th key={headerSlug}>{headerSlug}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {productList.map((product: Product) => (
              <tr key={product.slug}>
                <td>{product.slug}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.inStock}</td>
                <td>{product.category}</td>
                <td>
                  <Image
                    src={`${product.images[0]}`}
                    alt={`${product.name} image`}
                    width={80}
                    height={80}
                  />
                </td>
                <td>{product.description}</td>
                <td><ActionsCell product={product} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
};

export default AdminPage;
