import mockjs from "mockjs";

export const inventoryService = {
    getInventories: () => {
        return mockjs.mock({
            total: 100,
            current: 1,
            pageSize: 10,
            "inventories|10": [
                {
                    id: "@id",
                    code: "@id",
                    name: "@title(3)",
                    category: "@title(3)",
                    department: "@title(3)",
                    suplierTitle: "@title(3)",
                    warehouseTitle: "@title(3)",
                    "materialCount|1-100": 100,
                },
            ],
        });
    },
};
