import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3000/api',
	// withCredentials: true,
});

export function request(url, options) {
	return api(url, options)
		.then((res) => res.data)
		.catch((error) =>
			Promise.reject(error?.response?.data?.message ?? 'Error')
		);
}
