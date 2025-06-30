/// <reference types="react" />
export declare const group: (userOverrides?: {
    dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").ContainerProps>;
    component?: import("react").ForwardRefExoticComponent<import("@cloakui/types").ComponentStyleProps<import("react").CSSProperties, string> & {
        children?: import("react").ReactNode | (() => import("react").ReactNode);
    } & {
        cntrClassName?: string;
        as?: "article" | "aside" | "div" | "footer" | "header" | "main" | "section";
    } & import("react").RefAttributes<HTMLDivElement>>;
    meta?: {
        [x: string]: any;
    };
}) => import("@cloakwp/react").WPBlocksConfigReact;
