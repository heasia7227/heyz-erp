import { createContext, useContext, useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { generate } from "@ant-design/colors";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
import { styled } from "styled-components";
import { BaseStyled, DivProps } from "@/components/BaseStyled";
import { languageEnglish } from "./languages/languageEnglish";
import { languageChinese } from "./languages/languageChinese";

export interface IThemeContext {
    primarycolor: string;
    primarycolors: Array<string>;
    language: string;
    languagePack: { [key: string]: string };
    setLanguage?: (language: string) => void;
}

const themeDefaultSetting = {
    primarycolor: "#096dd9",
    primarycolors: [],
    language: "English",
    languagePack: {},
};

const languageMapping: { [key: string]: { [key: string]: string } } = {
    English: languageEnglish,
    Chinese: languageChinese,
};

export const ThemeContext = createContext<IThemeContext>(themeDefaultSetting);

interface IProps {
    children: React.ReactNode;
}

const ThemeProvider = ({ children }: IProps) => {
    const [setting, setSetting] = useState<IThemeContext>(themeDefaultSetting);

    useEffect(() => {
        const colors = generate(themeDefaultSetting.primarycolor);
        setSetting({
            ...themeDefaultSetting,
            primarycolors: colors,
            languagePack: languageMapping[themeDefaultSetting.language],
        });
    }, []);

    const setLanguage = (language: string) => {
        setSetting({ ...setting, language, languagePack: languageMapping[language] });
    };

    const themeConfig = { token: { colorPrimary: themeDefaultSetting.primarycolor, borderRadius: 0 } };

    return (
        <ThemeContext.Provider value={{ ...setting, setLanguage }}>
            <ConfigProvider theme={themeConfig} locale={setting.language === "English" ? enUS : zhCN}>
                <ThemeContent id="theme" {...setting}>
                    {children}
                </ThemeContent>
            </ConfigProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

export const useThemeController = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeController.");
    }
    return context;
};

const ThemeContent = BaseStyled(styled.div<DivProps>`
    .ant-tabs,
    .ant-tabs-content,
    .ant-tabs-tabpane {
        height: 100% !important;
    }
    .ant-table-thead > tr > th {
        background-color: ${(props) => props.theme?.primarycolors?.[9]} !important;
        color: #ffffff !important;
    }
    .ant-table-container .ant-table-tbody > tr:nth-child(2n + 1) > td {
        background-color: ${(props) => `${props.theme?.primarycolors?.[0]}`} !important;
    }
    a.ant-typography {
        border-radius: 4px;
        padding: 4px;
        color: #333333 !important;
        &:hover {
            color: ${(props) => props.theme?.primarycolor} !important;
            background-color: rgba(0, 0, 0, 0.06);
        }
    }
`);
