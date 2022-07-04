const axios = require('axios');

export const getAllProduct = async() => {
    const { data } = await axios.get('http://localhost:4000/product/get-all-product')
    return data;
}

export const getTwelveProducts = async({ pageParam = 1}) => {
    const { data } = await axios.get(`http://localhost:4000/product/get-twelve-products?page=${pageParam}`)
    return data;
}

export const getSingleProduct = async(id) => {
    const { data } = await axios.get(`http://localhost:4000/product/get-single-product/${id}`)
    return data;
}