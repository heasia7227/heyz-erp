import mockjs from "mockjs";

export const supplierService = {
    getArchives: () => {
        return mockjs.mock({
            total: 100,
            current: 1,
            pageSize: 10,
            "archives|10": [
                {
                    id: "@id",
                    title: "@title(5)",
                    responsiblePerson: "@first",
                    gender: "male",
                    contactNumber: "@id",
                    address: "@title(3)",
                    remarks: "",
                    webUrl: "https://www.google.com",
                    createDateTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
                },
            ],
        });
    },
};
