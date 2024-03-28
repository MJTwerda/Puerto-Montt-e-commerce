import { Product } from '../interfaces/product';

export const MOCK_CATEGORIES: { [key: string]: string; } = {
  ventilacion: 'Ventilación',
  cocina: 'Cocinas',
  heladeras: 'Heladeras',
  televisores: 'Televisores',
  microondas: 'Microondas',
}

export const AVAILABLE_PRODUCTS: Array<Product> = [
  { name: "Lorem Ipsum b49", image: "aire", description: "", price: "", category: MOCK_CATEGORIES.ventilacion },
  { name: "Lorem Ipsum b49", image: "cocinaOscura", description: "", price: "", category: MOCK_CATEGORIES.cocina },
  { name: "Lorem Ipsum b49", image: "cocinaRosa", description: "", price: "", category: MOCK_CATEGORIES.cocina },
  { name: "Lorem Ipsum b49", image: "heladeraVioleta", description: "", price: "", category: MOCK_CATEGORIES.heladeras },
  { name: "Lorem Ipsum b49", image: "teleMarron", description: "", price: "", category: MOCK_CATEGORIES.televisores },
  { name: "Lorem Ipsum b49", image: "telePlana", description: "", price: "", category: MOCK_CATEGORIES.televisores },
  { name: "Lorem Ipsum b49", image: "ventilador", description: "", price: "", category: MOCK_CATEGORIES.ventilacion },
];
