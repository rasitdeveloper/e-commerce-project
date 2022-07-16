const axios = require('axios');

axios.interceptors.request.use(
	function (config) {
		const { origin } = new URL(config.url);

		const allowedOrigins = ['http://localhost:4000'];
		const token = localStorage.getItem("access-token");

		if (allowedOrigins.includes(origin)) {
			config.headers.authorization = token;
		}

		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

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

export const toRegister = async(input) => {
    const { data } = await axios.post('http://localhost:4000/auth/register', input)
    return data;
}

export const fetchMe = async () => {
	const { data } = await axios.get('http://localhost:4000/auth/me');
	return data;
};

export const toLogout = async () => {
	const { data } = await axios.post('http://localhost:4000/auth/logout',{refresh_token: localStorage.getItem("refresh-token"),});
	return data;
};

export const toLogin = async (input) => {
	const { data } = await axios.post('http://localhost:4000/auth/login',input);
	return data;
};