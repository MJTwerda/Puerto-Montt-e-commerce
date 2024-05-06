import styles from './admin.module.css';
import ProductTable from './productTable';

export const metadata = {
  title: 'Admin page',
  description: 'User admin page'
};

const AdminPage = async () => {

  // Headers de la tabla. El orden debe coincidir con el tbody
  const tableHeaders: string[] = ['Slug', 'Nombre', 'Precio', 'En Stock', 'Categoría', 'Imagen principal', 'Descripción', 'Acciones'];

  return (
    <section>
      <h1 className={styles['admin-title']}>Página de administración</h1>
      <div className={styles["table-container"]}>
        <ProductTable tableHeaders={tableHeaders} />
      </div>
    </section>
  )
};

export default AdminPage;
