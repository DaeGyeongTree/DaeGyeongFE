import axios from 'axios';
const ENDPOINT = process.env.REACT_APP_ENDPOINT;
const defaultHeaders = {
	headers: {
		'Content-Type': 'application/json',
	},
};
export const axiosGetQuery = async (url, headers = defaultHeaders) => {
	const res = await axios.get(ENDPOINT + url, {}, headers);
	return res.data;
};
export const axiosGet = async (url, body, headers = defaultHeaders) => {
	const res = await axios.get(ENDPOINT + url, body, headers);
	return res.data;
};
export const axiosPostQuery = async (url, headers = defaultHeaders) => {
	const res = await axios.post(ENDPOINT + url, {}, headers);

	return res.data;
};
export const axiosPost = async (url, body, headers = defaultHeaders) => {
	const res = await axios.post(ENDPOINT + url, body, headers);

	return res.data;
};
