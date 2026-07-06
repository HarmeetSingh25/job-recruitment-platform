import api from "../../../api/axios";
import { ENDPOINTS } from "../../../api/Endpoint.js";

export const getJobs = async (params) => {
  const { data } = await api.get(ENDPOINTS.JOBS, {
    params,
  });

  return data;
};