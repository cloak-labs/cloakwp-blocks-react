/// <reference types="react" />
export declare const group: (userOverrides?: {
    dataRouter?: any;
    component?: import("react").ForwardRefExoticComponent<import("@cloakui/types").ComponentStyleProps<import("react").CSSProperties> & {
        children?: import("react").ReactNode | (() => import("react").ReactNode);
    } & {
        cntrClassName?: string;
        as?: "article" | "main" | "aside" | "div" | "footer" | "header" | "section";
    } & import("react").RefAttributes<HTMLDivElement>>;
}) => BlocksConfig<TComponent, TBlockData>;
