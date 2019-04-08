import axios from 'axios';

export const getAllProducts = () => {
    axios.get("https://api.myjson.com/bins/hepme").then(response =>{
          console.log("My api response", response.data)
          return response.data
        })
      .catch(err=> {
        console.log("FETCH_PRODUCTS_ERROR", err)
        return err
      })
  }