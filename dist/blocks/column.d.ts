/// <reference types="react" />
export declare const column: (userOverrides?: {
    dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").ComponentStyleProps<Record<string, any>> & {
        children?: any;
    } & {
        span: number;
    }>;
    component?: import("react").FC<import("../components/Column").ColumnProps>;
}) => import("@cloakwp/react").WPBlocksConfigReact;
