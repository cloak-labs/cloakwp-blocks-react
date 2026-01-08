/// <reference types="react" />
export declare const paragraph: (userOverrides?: {
    dataRouter?: import("cloakwp/blocks/types").WPDataRouter<import("@cloakui/types").TTypographyProps>;
    component?: import("react").ForwardRefExoticComponent<Omit<import("@cloakui/types").ComponentStyleProps<import("react").CSSProperties, string> & {
        children?: import("react").ReactNode;
    } & import("react").HTMLAttributes<HTMLElement> & {
        as: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "p" | "span";
    } & import("react").RefAttributes<never>, "ref"> & import("react").RefAttributes<any>>;
    meta?: {
        [x: string]: any;
    };
}) => import("@cloakwp/react").WPBlocksConfigReact;
