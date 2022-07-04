const axios = require('axios');

export const getAllProduct = async() => {
    const { data } = await axios.get('http://localhost:4000/product/get-all-product')
    return data;
}