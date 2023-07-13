import { ConfigProvider, theme } from "antd";
import { generate } from "@ant-design/colors";
import { createContext, useContext } from "react";

export interface IThemeContext {
    primarycolor?: string;
    primarycolors?: Array<string>;
    language?: string;
}

const themeDefaultSetting = {
    primarycolor: "#096dd9",
    language: "English",
};

export const ThemeContext = createContext<IThemeContext>(themeDefaultSetting);

interface IProps {
    children: React.ReactNode;
}

const ThemeProvider = ({ children }: IProps) => {
    const colors = generate(themeDefaultSetting.primarycolor);
    const themeConfig = { token: { colorPrimary: themeDefaultSetting.primarycolor } };

    return (
        <ThemeContext.Provider value={{ ...themeDefaultSetting, primarycolors: colors }}>
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
