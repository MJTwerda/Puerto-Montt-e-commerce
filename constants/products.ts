export const POSSIBLE_ACTIONS = {
  add: 'ADD',
  subtract: 'SUBTRACT'
}

/**
 * TODO: Próximamente se obtendrán estas categorías desde la base de datos.
 * Al agregar la página de admin se agregará una sección para crear/modificar/eliminar categorías
 * Al igual que se agregará sección para agregar más productos al listado
 */
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
