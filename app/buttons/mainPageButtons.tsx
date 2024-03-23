'use client'
import buttonStyles from './buttons.module.css';
import { POSSIBLE_BUTTONS } from '../../utils/commonButtonActions';

interface Props {
  showButtons: string[]; // Define qué botones se van a mostrar en la página
}

/**
 * Recorre el array showButtons, y si la key matchea con alguno de los POSSIBLE_BUTTONS muestra
 * un botón con las propiedades del botón matcheado
 */
const MainPageButtons = ({ showButtons }: Props) => {
  return (
    <>
      {showButtons.map(button => (
        POSSIBLE_BUTTONS[button as keyof typeof POSSIBLE_BUTTONS] ? (
          <button
            key={button}
            onClick={POSSIBLE_BUTTONS[button as keyof typeof POSSIBLE_BUTTONS].action}
            className={buttonStyles[POSSIBLE_BUTTONS[button as keyof typeof POSSIBLE_BUTTONS].className]}>
            {POSSIBLE_BUTTONS[button as keyof typeof POSSIBLE_BUTTONS].name}
          </button>
        ) : null
      ))}
    </>
  )
}

export default MainPageButtons;