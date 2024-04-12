'use client'
import { POSSIBLE_BUTTONS } from '../../utils/commonButtonActions';
import { useRouter } from "next/navigation";

interface Props {
  showButtons: string[]; // Define qué botones se van a mostrar en la página
  productId: string
}

/**
 * Recorre el array showButtons, y si la key matchea con alguno de los POSSIBLE_BUTTONS muestra
 * un botón con las propiedades del botón matcheado
 */
const MainPageButtons = ({ showButtons, productId }: Props) => {
  const router = useRouter();

  /**
   * Por el momento ambos botones redirigirán al detalle del producto, ya sea para comprarlo o
   * para ver su detalle
   */
  const handleClick = () => {
    return router.push(`/products/${productId}`);
  }

  return (
    <>
      {showButtons.map(button => (
        POSSIBLE_BUTTONS[button as keyof typeof POSSIBLE_BUTTONS] ? (
          <button
            key={button}
            onClick={handleClick}
            className={POSSIBLE_BUTTONS[button as keyof typeof POSSIBLE_BUTTONS].className}
          >
            {POSSIBLE_BUTTONS[button as keyof typeof POSSIBLE_BUTTONS].name}
          </button>
        ) : null
      ))}
    </>
  )
}

export default MainPageButtons;