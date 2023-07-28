import mockjs from "mockjs";

export const countingService = {
    getTemporaries: () => {
        return mockjs.mock({
            total: 100,
            current: 1,
            pageSize: 10,
            "temporaries|10": [
                {
                    id: "@id",
                    warehouseTitle: "@title(3)",
                    countingDate: '@date("yyyy-MM-dd")',
                    countingResponsiblePerson: "@first",
                    sceneResponsiblePerson: "@first",
                    status: "@title(1)",
                },
            ],
        });
    },
    getRegulars: () => {
        return mockjs.mock({
            total: 100,
            current: 1,
            pageSize: 10,
            "regulars|10": [
                {
                    id: "@id",
                    warehouseTitle: "@title(3)",
                    countingDate: '@date("yyyy-MM-dd")',
                    countingResponsiblePerson: "@first",
                    sceneResponsiblePerson: "@first",
                    status: "@title(1)",
                },
            ],
        });
    },
};
