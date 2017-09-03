import {
  getProductsRequest,
  createProductRequest,
  deleteProductRequest
} from './api'

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const getProducts = () => {
  return dispatch => {
    getProductsRequest().then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.payload
      })
    }).catch(err => console.log(err))
  }
}

export const createProduct = (product) => {
  return dispatch => {
    createProductRequest(product).then((res) => {
      dispatch({
        type: CREATE_PRODUCT,
        payload: res.payload
      })
    }).catch(err => console.log(err))
  }
}

export const deleteProduct = (id) => {
  return dispatch => {
    deleteProductRequest(id).then((res) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: res.payload._id
      })
    }).catch(err => console.log(err))
  }
}
