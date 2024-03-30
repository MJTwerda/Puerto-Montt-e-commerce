import { Product } from "../interfaces/product";

export const MOCK_CATEGORIES: { [key: string]: { label: string; value: string } } = {
  todos: { label: "Todos", value: 'todos' },
  ventilacion: { label: "Ventilación", value: 'ventilacion'},
  cocina: { label: "Cocinas", value: 'cocina'},
  heladeras: { label: "Heladeras", value: 'heladeras'},
  televisores: { label: "Televisores", value: 'televisores'},
  microondas: { label: "Microondas", value: 'microondas'},
};

export const AVAILABLE_PRODUCTS: Array<Product> = [
  {
    name: "Dalewo frío/calor",
    image: "aire",
    description: "",
    price: "$100",
    category: MOCK_CATEGORIES.ventilacion.value,
  },
  {
    name: "Lorem Ipsum b49",
    image: "cocinaOscura",
    description: "",
    price: "$100",
    category: MOCK_CATEGORIES.cocina.value,
  },
  {
    name: "Partik g749",
    image: "cocinaRosa",
    description: "",
    price: "$100",
    category: MOCK_CATEGORIES.cocina.value,
  },
  {
    name: "Phillko B1 con freezer",
    image: "heladeraVioleta",
    description: "",
    price: "$100",
    category: MOCK_CATEGORIES.heladeras.value,
  },
  {
    name: "Sorny 42''",
    image: "teleMarron",
    description: "",
    price: "$100",
    category: MOCK_CATEGORIES.televisores.value,
  },
  {
    name: "Sanson g44''",
    image: "telePlana",
    description: "",
    price: "$100",
    category: MOCK_CATEGORIES.televisores.value,
  },
  {
    name: "Iliana turbo b5b",
    image: "ventilador",
    description: "",
    price: "$100",
    category: MOCK_CATEGORIES.ventilacion.value,
  },
];
