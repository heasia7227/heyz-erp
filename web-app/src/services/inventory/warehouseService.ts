import mockjs from "mockjs";

export const warehouseService = {
    getWarehouses: () => {
        return mockjs.mock({
            total: 100,
            current: 1,
            pageSize: 10,
            "warehouses|10": [
                {
                    id: "@id",
                    title: "@title(3)",
                    department: "@title(3)",
                    address: "@title(3)",
                    position: "longitude,latitude",
                    "level|1-5": 5,
                    administrator: "@first",
                    contactNumber: "@id",
                },
            ],
        });
    },
};
