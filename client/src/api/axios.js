import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000/api"|| import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;
