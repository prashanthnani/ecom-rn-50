import { LOAD_PRODUCTS, FETCH_PRODUCTS, DELETE_PRODUCTS } from './actionTypes';

//Import the sample data
import Products from '../groceries.json';
import store from "../store/store";


/**export const loadProducts(){
    return (dispatch) => {

        setTimeout(() => {
            var data  = Products;
            dispatch({type: LOAD_PRODUCTS, products:products});
        }, 2000);

    };
}
**/

export const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS,
  };
};
export const loadProducts = products => {
  return {
    type: LOAD_PRODUCTS,
    products: Products
  };
};

export const deleteProducts = products => {
  return {
    type: DELETE_PRODUCTS,
    products: products
  };
};

export const deleteProductsActionCreator = (products) => {
    var objKey = Object.keys(products)[0];
   delete products[objKey];
   return dispatch => {
     dispatch(deleteProducts(products));
  }
};
export const loadProductsActionCreator = () => {

  return dispatch => {
    dispatch(fetchProducts());
    dispatch(loadProducts(Products));
  }
};
