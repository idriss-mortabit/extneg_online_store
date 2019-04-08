import {receiveProducts} from './../actions/index';
import axios from 'axios';

export const getAllProducts = () => (dispatch) => {
    axios.get("api/get/products").then(response =>{
          console.log("My api response", response.data)
          dispatch(receiveProducts(response.data))
          return response.data
        })
      .catch(err=> {
        dispatch({type: 'FETCH_PRODUCTS_ERROR', payload: err})

      })
  }
