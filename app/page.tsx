import "./globals.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
