'use client'
import React from "react";
import styles from './modal.module.css';
import CommonButton from './button';

interface Props {
  open: boolean;
  title: string;
  onClose: (open: boolean) => void;
  onConfirm: () => void;
}

const CommonModal = (props: Props) => {
  if (!props.open) return null;

  return (
    <div id="myModal" className={styles["modal"]} style={{ display: props.open ? 'block' : 'none' }}>
      <div className={styles["modal-content"]}>
        <p>{props.title}</p>
        <div className={styles['modal-actions-container']}>
          <CommonButton 
            label="Cancelar"
            action={() => props.onClose(false)}
            className={`${styles['action-button']} secondary-button`}
          />
          <CommonButton 
            label="Confirmar"
            action={props.onConfirm}
            className={`${styles['action-button']} primary-button`}
          />
        </div>
      </div>
    </div>
  )
};

export default CommonModal;