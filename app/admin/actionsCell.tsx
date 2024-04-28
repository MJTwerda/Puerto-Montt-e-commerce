'use client'
import React, { useState } from "react"
import styles from './admin.module.css';
import CommonButton from "../components/button";
import CommonModal from '../components/commonModal';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Product } from "@/interfaces/product";
import { useRouter } from 'next/navigation';

interface Props {
  product: Product;
}

const ActionsCell = ({ product }: Props) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const router = useRouter();

  /**
   * Se abre el modal de confirmación para Editar o Eliminar un producto
   */
  const handleOpenModal = () => {
    setOpenDeleteModal(true);
  };

  /**
   * TODO: Crear pantalla de edición de producto y colocar acá
   * Redirección a pantalla de edición de productos
   */
  const handleUpdateProduct = () => {
    console.log('🟣El producto se modificó: ', product);
    setOpenDeleteModal(false);
    router.push('/')
  }

  /**
    * Acción de confirmación de modal si se abre desde botón ELIMINAR
  */
  const handleDeleteProduct = () => {
    console.log('🔴El producto se eliminó: ', product);
    setOpenDeleteModal(false);
  }

  return (
    <div className={styles['action-btn-container']}>
      <CommonButton
        label={
          <div className={styles['action-icon']}>
            <FaEdit color='#FDEBE4' size={21} />
          </div>
        }
        action={() => handleUpdateProduct()}
        className={`${styles['admin-action-btn']} secondary-button`}
      />
      <CommonButton
        label={
          <div className={styles['action-icon']}>
            <MdDelete color='#FDEBE4' size={21} />
          </div>
        }
        action={handleOpenModal}
        className={`${styles['admin-action-btn']} delete-button`}
      />

      <CommonModal
        open={openDeleteModal}
        title={`¿Estás seguro que quieres eliminar ${product.name}? Esta acción es irreversible`}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={handleDeleteProduct}
      />
    </div>
  )
};

export default ActionsCell;