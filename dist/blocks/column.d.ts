/// <reference types="react" />
export declare const column: (userOverrides?: {
    dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").ComponentStyleProps<Record<string, any>> & {
        children?: any;
    } & {
        span: number;
    }>;
    component?: import("react").ForwardRefExoticComponent<import("@cloakui/types").ComponentStyleProps<import("react").CSSProperties> & {
        children?: import("react").ReactNode;
    } & {
        span: number;
    } & import("react").RefAttributes<HTMLDivElement>>;
}) => import("@cloakwp/react").WPBlocksConfigReact;
