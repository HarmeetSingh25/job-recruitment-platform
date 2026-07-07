import api from "../../../api/axios";
import {ENDPOINTS} from "../../../api/Endpoint";

export const getDuplicates = async () => {
  const { data } = await api.get(ENDPOINTS.DUPLICATE);
  
  return data;
};

    export const updateDuplicate = async (id, status) => {
    const { data } = await api.patch(`${ENDPOINTS.DUPLICATE}/${id}`, {
  status,
});

      return data;
    };