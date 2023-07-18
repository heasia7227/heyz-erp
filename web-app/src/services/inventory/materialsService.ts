import mockjs from "mockjs";

export const materialsService = {
    getCategories: () => {
        return mockjs.mock({
            "categories|20": [
                {
                    key: "@id",
                    code: "@id",
                    title: "@title(3)",
                    "children|10": [
                        {
                            key: "@id",
                            code: "@id",
                            title: "@title(3)",
                            isLeaf: true,
                        },
                    ],
                },
            ],
        });
    },
    getMaterials: () => {
        return mockjs.mock({
            total: 100,
            current: 1,
            pageSize: 10,
            "materials|10": [
                {
                    id: "@id",
                    code: "@id",
                    name: "@title(3)",
                    category: "@title(3)",
                    department: "@title(3)",
                    warehouse: "@title(3)",
                    inventoryNumber: 1,
                    usedNumber: 1,
                    regularMaintenanceFrequency: "",
                    scrapDateTime: "@datetime('yyyy-MM-dd HH:mm:ss')",
                },
            ],
        });
    },
};
