import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const fetchProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};
