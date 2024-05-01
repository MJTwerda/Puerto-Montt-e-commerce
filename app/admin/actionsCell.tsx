'use client'
import React, { useState } from "react"
import { useRouter } from 'next/navigation';
import styles from './admin.module.css';
import CommonButton from "../components/button";
import CommonModal from '../components/commonModal';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Product } from "@/interfaces/product";
import { INTERNAL_API_URL } from "@/constants/commons";
import axios from "axios";

interface Props {
  product: Product;
}

const ActionsCell = ({ product }: Props) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const router = useRouter();

  // Se abre el modal de confirmación para Editar o Eliminar un producto
  const handleOpenModal = () => {
    setOpenDeleteModal(true);
  };

  // Redirección a pantalla de edición de productos
  const handleUpdateProduct = () => {
    setOpenDeleteModal(false);
    router.push(`/admin/${product.slug}`);
  }

  /**
    * Acción de confirmación de modal si se abre desde botón ELIMINAR.
    * TODO: Agregar notificaciones para estas operaciones admin
  */
  const handleDeleteProduct = async () => {
    setOpenDeleteModal(false);
    await axios({
      url: `${INTERNAL_API_URL}/product-details/${product.slug}`,
      method: 'DELETE'
    }).then(({ data }) => {
      if (data.ok) {
        //TODO: Mostrar notificación de eliminación exitosa
        alert(`${data.message}`);
        router.refresh()
      }
    });
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