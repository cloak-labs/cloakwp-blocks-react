/// <reference types="react" />
export declare const heading: (userOverrides?: {
    variantsRouter?: (block: import("cloakcms").BlockDataWithExtraContext<import("cloakwp/blocks").RestApiBlockData>) => string;
    variants?: {
        h1?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component?: import("react").FC<TTypographyProps<import("react").CSSProperties, import("react").ReactNode>>;
        };
        h2?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component?: import("react").FC<TTypographyProps<import("react").CSSProperties, import("react").ReactNode>>;
        };
        h3?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component?: import("react").FC<TTypographyProps<import("react").CSSProperties, import("react").ReactNode>>;
        };
        h4?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component?: import("react").FC<TTypographyProps<import("react").CSSProperties, import("react").ReactNode>>;
        };
        h5?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component?: import("react").FC<TTypographyProps<import("react").CSSProperties, import("react").ReactNode>>;
        };
        h6?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component?: import("react").FC<TTypographyProps<import("react").CSSProperties, import("react").ReactNode>>;
        };
    };
}) => import("@cloakwp/react").WPBlocksConfigReact;
