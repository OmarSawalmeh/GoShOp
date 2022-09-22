import {
  PRODCUT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODCUT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constant/prodcutConstants'

export const productListReducer = (state = { products: [] }, action) => {
   switch (action.type) {
     case PRODCUT_LIST_REQUEST:
       return { loading: true, products: [] }
     case PRODUCT_LIST_SUCCESS:
       return { loading: false, products: action.payload }
     case PRODUCT_LIST_FAIL:
       return { loading: false, error: action.payload }
     default:
       return state
   }
}


export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
  switch (action.type) {
    case PRODCUT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}