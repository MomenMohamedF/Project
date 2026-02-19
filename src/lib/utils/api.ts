import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 15000, 
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
  payload: Partial<Omit<product, "_id" | "id">>,
) => {
  const response = await api.put(`/products/${id}`, payload);
  return response.data;
};


export const deleteProduct = async (id: string) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export const forgetPassword = async (email: string) => {
  const response = await api.post("/auth/forget-password", { email });
  return response.data;
};

export const resetPassword = async (token: string, newPassword: string) => {
  const response = await api.post(`/auth/reset-password/${token}`, {
    newPassword,
  });
  return response.data;
};
