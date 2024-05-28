/// <reference types="react" />
export declare const paragraph: (userOverrides?: {
    dataRouter?: any;
    component?: import("react").ForwardRefExoticComponent<import("@cloakui/types").ComponentStyleProps<import("react").CSSProperties> & {
        children?: import("react").ReactNode;
    } & {
        as: "blockquote" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    } & import("react").RefAttributes<never>>;
}) => BlocksConfig<TComponent, TBlockData>;
