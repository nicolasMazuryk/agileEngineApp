import {createReducer} from 'core/utils'
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
} from './actions'

const DEFAULT_STATE = {
  products: []
}

const setProducts = (state, action) => ({
  ...state,
  products: action.payload
})

const addProduct = (state, action) => ({
  ...state,
  products: [
    ...state.products,
    action.payload
  ]
})

const deleteProduct = (state, action) => {
  return {
    ...state,
    products: state.products.filter(({_id}) => _id !== action.payload)
  }
}

export default createReducer(DEFAULT_STATE, {

  [GET_PRODUCTS]: setProducts,
  [CREATE_PRODUCT]: addProduct,
  [DELETE_PRODUCT]: deleteProduct

})
