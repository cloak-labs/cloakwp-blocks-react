/// <reference types="react" />
export declare const column: (userOverrides?: {
    dataRouter?: any;
    component?: import("react").ForwardRefExoticComponent<import("@cloakui/types").ComponentStyleProps<import("react").CSSProperties> & {
        children?: import("react").ReactNode | (() => import("react").ReactNode);
    } & {
        span: number;
    } & import("react").RefAttributes<HTMLDivElement>>;
}) => BlocksConfig<TComponent, TBlockData>;
