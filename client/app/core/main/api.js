import {request} from '../utils'

export const getProductsRequest = () => {
  return request('/products')
}

export const createProductRequest = (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  return request('/products', options)
}

export const deleteProductRequest = (id) => {
  return request(`/products/${id}`, {method: 'DELETE'})
}
