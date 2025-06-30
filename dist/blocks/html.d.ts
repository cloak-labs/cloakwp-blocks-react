/// <reference types="react" />
export declare const html: (userOverrides?: {
    dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").THtmlProps>;
    component?: import("react").ForwardRefExoticComponent<import("@cloakui/types").ComponentStyleProps<import("@cloakui/react-primitives").CSSPropertiesAndVariables, string> & {
        children?: import("react").ReactNode;
    } & import("react").RefAttributes<HTMLDivElement>>;
    meta?: {
        [x: string]: any;
    };
}) => import("@cloakwp/react").WPBlocksConfigReact;
