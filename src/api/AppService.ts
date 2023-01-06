import axios from "axios";

const API = axios.create({ baseURL: `http://localhost:5000/app` });

const URL = "/";

export const updateAPI = async (RouteData: any) => {
	const { data } = await API.post(`/post`, RouteData);

	console.log(data, "new routes");

	return data;
};
