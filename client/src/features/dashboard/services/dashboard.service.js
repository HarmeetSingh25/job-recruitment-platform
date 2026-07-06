import api from "../../../api/axios.js";
import { ENDPOINTS } from "../../../api/Endpoint.js";

export const getDashboardStats = async () => {
  const {data}  = await api.get(ENDPOINTS.DASHBOARD);

  return data;
};