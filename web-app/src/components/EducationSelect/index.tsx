"use client";

import { useEffect, useState } from "react";
import { Select, SelectProps } from "antd";
import httpFetch from "@/utils/http-fetch";
import { IDictionary } from "@/interfaces/common/dictionary";

const EducationSelect = (props: SelectProps) => {
    const [dictionaries, setDictionaries] = useState<any[]>([]);

    useEffect(() => {
        getEducations();
    }, []);

    const getEducations = async () => {
        const result = await httpFetch<IDictionary[]>("/common/dictionaries", {
            params: { dictionaryType: "education" },
        });
        setDictionaries(result?.map((item) => ({ label: item.title, value: item.id })));
    };

    return (
        <>
            <Select placeholder="请选择学历" options={dictionaries} {...props} />
        </>
    );
};

export default EducationSelect;
