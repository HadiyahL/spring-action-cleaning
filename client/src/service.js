import { post, get, put } from "./api";

export const getWorkers = async () => {
	const response = await get("/workers");
	return response.data;
};

export const getWorker = async (id) => {
	const response = await get(`/jobs/workers/${id}`);
	return response.data;
};

export const postWorkers = async (data) => {
	const response = await post("/workers", data);
	return response.data;
};

export const postCustomer = async (data) => {
	const response = await post("/customers", data);
	return response.data;
};

export const putCustomer = async (id, data) => {
	const response = await put(`/customers/${id}`, data);
	return response.data;
};

export const getCustomers = async () => {
	const response = await get("/customers");
	return response.data;
};

export const getBranches = async (id) => {
	const response = await get(`/branches/customer/${id}`);
	return response.data;
};

export const getCustomer = async (id) => {
	const response = await get(`/customers/${id}`);
	return response.data;
};

export const getJobsCustomer = async (id) => {
	const response = await get(`/jobs/customers/${id}`);
	return response.data;
};

export const getBranch = async (id) => {
	const response = await get(`/jobs/branches/${id}`);
	return response.data;
};

export const postJobs = async (data) => {
	const response = await post("/jobs", data);
	return response.data;
};

export const putJobs = async (id, data) => {
	const response = await put(`/jobs/${id}`, data);
	return response.data;
};

export const postBranch = async (id, data) => {
	const response = await post(`/branches/${id}`, data);
	return response.data;
};

export const putBranch = async (branch_id, customer_id, data) => {
	const response = await put(`/branches/${customer_id}/${branch_id}`, data);
	return response.data;
};
