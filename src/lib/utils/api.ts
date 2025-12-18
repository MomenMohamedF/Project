import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const fetchProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const createProduct = async (payload: Omit<product, "_id" | "id">) => {
  const response = await api.post("/products", payload);
  return response.data;
};

export const updateProduct = async (
  id: string,
  payload: Partial<Omit<product, "_id" | "id">>
) => {
  const response = await api.put(`/products/${id}`, payload);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};