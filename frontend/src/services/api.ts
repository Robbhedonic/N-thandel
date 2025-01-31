// frontend/src/services/api.ts
// import axios from "axios";

// // export const getProducts = async () => {
// //     const response = await axios.get("/api/products");
// //     return response.data;
// // };


// export const getProducts = async () => {
//   const response = await axios.get("/api/products");
//   return response.data;
// };


// export const getProductById = async (id: number) => {
//     const response = await axios.get(`/api/products/${id}`);
//     return response.data;
// };



import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get("/api/products"); // Ruta relativa
  return response.data;
};

export const getProductById = async (id: number) => {
  const response = await axios.get(`/api/products/${id}`); // Ruta relativa
  return response.data;
};
