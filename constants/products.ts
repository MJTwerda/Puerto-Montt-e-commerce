import { Product } from "../interfaces/product";

export const POSSIBLE_ACTIONS = {
  add: 'ADD',
  subtract: 'SUBTRACT'
}

export const MOCK_CATEGORIES: {
  [key: string]: { label: string; value: string };
} = {
  todos: { label: "Todos", value: "todos" },
  ventilacion: { label: "Ventilación", value: "ventilacion" },
  cocina: { label: "Cocinas", value: "cocina" },
  heladeras: { label: "Heladeras", value: "heladeras" },
  televisores: { label: "Televisores", value: "televisores" },
  microondas: { label: "Microondas", value: "microondas" },
};

// TODO: Eliminar mock luego de agregar los productos restantes
export const AVAILABLE_PRODUCTS: Array<Product> = [
  {
    id: 'b15ced41-3ab7-4f47-800f-298197609a22',
    name: "Partik g749 3 hornallas con horno de tres pizos y medidor de temperatura 320 C° máx",
    images: ["cocinaRosa.png"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum odio at fermentum imperdiet. Etiam eget eleifend sapien, vel pulvinar metus. Integer varius rutrum tellus, at vehicula dolor dictum eu. Maecenas justo massa, dignissim at tempor sit amet, commodo vel massa. Etiam sem tortor, laoreet porta molestie nec, lobortis et metus.",
    price: 105000,
    category: MOCK_CATEGORIES.cocina.value,
    inStock: 1,
    slug: 'b15ced41-3ab7-4f47-800f-298197609a22'
  },
  {
    id: 'b18ced41-3ab7-4f47-800f-298197609a25',
    name: "Sanson g44''",
    images: ["telePlana.png"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum odio at fermentum imperdiet. Etiam eget eleifend sapien, vel pulvinar metus. Integer varius rutrum tellus, at vehicula dolor dictum eu. Maecenas justo massa, dignissim at tempor sit amet, commodo vel massa. Etiam sem tortor, laoreet porta molestie nec, lobortis et metus.",
    price: 79999,
    category: MOCK_CATEGORIES.televisores.value,
    inStock: 5,
    slug: 'b18ced41-3ab7-4f47-800f-298197609a25'
  },
  {
    id: 'b19ced41-3ab7-4f47-800f-298197609a26',
    name: "Iliana turbo b5b de piso negro con 3 palas 220v 20 diámetro",
    images: ["ventilador.png"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum odio at fermentum imperdiet. Etiam eget eleifend sapien, vel pulvinar metus. Integer varius rutrum tellus, at vehicula dolor dictum eu. Maecenas justo massa, dignissim at tempor sit amet, commodo vel massa. Etiam sem tortor, laoreet porta molestie nec, lobortis et metus.",
    price: 24249,
    category: MOCK_CATEGORIES.ventilacion.value,
    inStock: 7,
    slug: 'b19ced41-3ab7-4f47-800f-298197609a26'
  },
];
