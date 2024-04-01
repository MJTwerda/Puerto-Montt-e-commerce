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

export const AVAILABLE_PRODUCTS: Array<Product> = [
  {
    name: "Candv frío/calor 3000 cal 1 año de garantía",
    image: "aire",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum odio at fermentum imperdiet. Etiam eget eleifend sapien, vel pulvinar metus. Integer varius rutrum tellus, at vehicula dolor dictum eu. Maecenas justo massa, dignissim at tempor sit amet, commodo vel massa. Etiam sem tortor, laoreet porta molestie nec, lobortis et metus.",
    price: 88999,
    category: MOCK_CATEGORIES.ventilacion.value,
  },
  {
    name: "Lorem Ipsum b49 4 hornallas + horno con encendedor eléctrico",
    image: "cocinaOscura",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum odio at fermentum imperdiet. Etiam eget eleifend sapien, vel pulvinar metus. Integer varius rutrum tellus, at vehicula dolor dictum eu. Maecenas justo massa, dignissim at tempor sit amet, commodo vel massa. Etiam sem tortor, laoreet porta molestie nec, lobortis et metus.",
    price: 91299,
    category: MOCK_CATEGORIES.cocina.value,
  },
  {
    name: "Partik g749 3 hornallas con horno de tres pizos y medidor de temperatura 320 C° máx",
    image: "cocinaRosa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum odio at fermentum imperdiet. Etiam eget eleifend sapien, vel pulvinar metus. Integer varius rutrum tellus, at vehicula dolor dictum eu. Maecenas justo massa, dignissim at tempor sit amet, commodo vel massa. Etiam sem tortor, laoreet porta molestie nec, lobortis et metus.",
    price: 105000,
    category: MOCK_CATEGORIES.cocina.value,
  },
  {
    name: "Phillko B1 con freezer 220v color rosa",
    image: "heladeraVioleta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum odio at fermentum imperdiet. Etiam eget eleifend sapien, vel pulvinar metus. Integer varius rutrum tellus, at vehicula dolor dictum eu. Maecenas justo massa, dignissim at tempor sit amet, commodo vel massa. Etiam sem tortor, laoreet porta molestie nec, lobortis et metus.",
    price: 121999,
    category: MOCK_CATEGORIES.heladeras.value,
  },
  {
    name: "Sorny Led 42'' 4k Google Tv Streaming",
    image: "teleMarron",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum odio at fermentum imperdiet. Etiam eget eleifend sapien, vel pulvinar metus. Integer varius rutrum tellus, at vehicula dolor dictum eu. Maecenas justo massa, dignissim at tempor sit amet, commodo vel massa. Etiam sem tortor, laoreet porta molestie nec, lobortis et metus.",
    price: 65499,
    category: MOCK_CATEGORIES.televisores.value,
  },
  {
    name: "Sanson g44''",
    image: "telePlana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum odio at fermentum imperdiet. Etiam eget eleifend sapien, vel pulvinar metus. Integer varius rutrum tellus, at vehicula dolor dictum eu. Maecenas justo massa, dignissim at tempor sit amet, commodo vel massa. Etiam sem tortor, laoreet porta molestie nec, lobortis et metus.",
    price: 79999,
    category: MOCK_CATEGORIES.televisores.value,
  },
  {
    name: "Iliana turbo b5b de piso negro con 3 palas 220v 20 diámetro",
    image: "ventilador",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum odio at fermentum imperdiet. Etiam eget eleifend sapien, vel pulvinar metus. Integer varius rutrum tellus, at vehicula dolor dictum eu. Maecenas justo massa, dignissim at tempor sit amet, commodo vel massa. Etiam sem tortor, laoreet porta molestie nec, lobortis et metus.",
    price: 24249,
    category: MOCK_CATEGORIES.ventilacion.value,
  },
];
