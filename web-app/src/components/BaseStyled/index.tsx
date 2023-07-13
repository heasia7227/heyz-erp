import { IThemeContext, useThemeController } from "@/theme";

export const BaseStyled = <T,>(WrapComponent: React.ComponentType<T>) => {
    return (props: T): JSX.Element => {
        const theme = useThemeController();
        return <WrapComponent {...props} {...theme} />;
    };
};

export type DivProps = React.HTMLAttributes<HTMLDivElement> & IThemeContext;
