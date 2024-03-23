const handleBuyNow = () => {
  console.log('Click Comprar ahora!')
}

const handleShowDetails = () => {
  console.log('Click Ver detalles!')
}

// Define los botones que se van a mostrar con su título y su acción
export const POSSIBLE_BUTTONS = {
  comprarAhora: {
    name: 'Comprar ahora',
    action: handleBuyNow,
    className: 'buyNowButton'
  },
  verDetalles: {
    name: 'Ver detalles',
    action: handleShowDetails,
    className: 'showDetailsButton'
  }
};