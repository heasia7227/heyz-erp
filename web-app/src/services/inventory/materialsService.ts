import { API } from "@/api/httpClient";
import { IMaterialQuery } from "@/interfaces/inventory/IMaterials";

export const materialsService = {
    getCategories: async () => {
        return await API.get(`/inventory/material/category/list`);
    },
    getMaterials: async (params: IMaterialQuery) => {
        return await API.get(`/inventory/material/list`, { params });
    },
};
