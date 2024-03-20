import styles from "./header.module.css";

const Header = () => {
  return (
    <nav>
        <img src='vercel.svg' alt='e-commerce icon' />

        <div className={styles.divContainerForm}>
          <form>
            <input
              type="text"
              className={styles.searchBar}
              placeholder="Buscá productos..."
            />
            <button>
              <div className={styles.searchIconContainer} aria-label="Buscar">
              </div>
            </button>
          </form>
        </div>

        <div className={styles.navigateSection}>
          <h4>Nosotros</h4>
          <h4>Ofertas</h4>
          <h4>Categorías</h4>
          <h4>Comprar</h4>
        </div>
      </nav>
  )
};

export default Header;