export interface IThemeContext {
    primarycolor: string;
    primarycolors: Array<string>;
    language: string;
    languagePack: { [key: string]: string };
    formItemLayout: IFormItemLayout;
    setLanguage?: (language: string) => void;
}

interface IFormItemLayout {
    labelCol: {
        xs: { span: number };
        sm: { span: number };
    };
    wrapperCol: {
        xs: { span: number };
        sm: { span: number };
    };
}
