import axios from 'axios';

// TODO: verificar si esta función se seguirá usando
export const getAllCategories = () => {
  // return fetch('https://fakestoreapi.com/products/categories')
  return axios.get('https://api.escuelajs.co/api/v1/categories');
};

export const getAllEelectronicProducts = (categoryId: number) => {
  return axios({
    method: 'get',
    url: 'https://api.escuelajs.co/api/v1/products',
    params: { categoryId }
  });
}