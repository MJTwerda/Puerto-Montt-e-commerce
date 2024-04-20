'use client'
import { POSSIBLE_BUTTONS } from '../../utils/commonButtonActions';
import { useRouter } from "next/navigation";
import CommonButton from '../components/button';

interface Props {
  showButtons: string[]; // Define qué botones se van a mostrar en la página
  productSlug: string
}

/**
 * Recorre el array showButtons, y si la key matchea con alguno de los POSSIBLE_BUTTONS muestra
 * un botón con las propiedades del botón matcheado
 */
const MainPageButtons = ({ showButtons, productSlug }: Props) => {
  const router = useRouter();

  /**
   * Por el momento ambos botones redirigirán al detalle del producto, ya sea para comprarlo o
   * para ver su detalle
   */
  const handleClick = () => {
    return router.push(`/products/${productSlug}`);
  }

  return (
    <>
      {showButtons.map(button => (
        POSSIBLE_BUTTONS[button as keyof typeof POSSIBLE_BUTTONS] ? (
          <CommonButton 
            key={button}
            label={POSSIBLE_BUTTONS[button as keyof typeof POSSIBLE_BUTTONS].name}
            className={POSSIBLE_BUTTONS[button as keyof typeof POSSIBLE_BUTTONS].className}
            action={handleClick}
          />
        ) : null
      ))}
    </>
  )
}

export default MainPageButtons;