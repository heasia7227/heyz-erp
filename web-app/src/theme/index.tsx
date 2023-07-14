import { ConfigProvider } from "antd";
import { generate } from "@ant-design/colors";
import { createContext, useContext, useEffect, useState } from "react";
import { languageEnglish } from "./languages/languageEnglish";
import { languageChinese } from "./languages/languageChinese";

export interface IThemeContext {
    primarycolor?: string;
    primarycolors?: Array<string>;
    language?: string;
    languagePack?: { [key: string]: string };
    setLanguage?: (language: string) => void;
}

const themeDefaultSetting = {
    primarycolor: "#096dd9",
    language: "English",
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

    const themeConfig = { token: { colorPrimary: themeDefaultSetting.primarycolor } };

    return (
        <ThemeContext.Provider value={{ ...setting, setLanguage }}>
            <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
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
