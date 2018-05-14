import axios from 'axios';

export async function requestProduct(productId) {
  const path = `/api/products/${productId}`;

  return axios.get(path);
}
