/// <reference types="react" resolution-mode="require"/>
export declare const column: (userOverrides?: Partial<{
    dataRouter: import("cloakwp").WPDataRouter<import("@cloakui/types").ComponentStyleProps<Record<string, any>> & {
        children?: any;
    } & {
        span: number;
    }>;
    component: import("react").FC<import("../components/Column.js").ColumnProps>;
}>) => import("@cloakwp/react").WPBlocksConfigReact;
