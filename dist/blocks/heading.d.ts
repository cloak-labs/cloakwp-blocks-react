/// <reference types="react" />
export declare const heading: (userOverrides?: {
    variantsRouter?: (block: import("cloakcms").BlockDataWithExtraContext<import("cloakwp/blocks").RestApiBlockData>) => string;
    variants?: {
        h1?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component?: import("react").FC<import("@cloakui/react-primitives/Typography").TypographyProps>;
        };
        h2?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component?: import("react").FC<import("@cloakui/react-primitives/Typography").TypographyProps>;
        };
        h3?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component?: import("react").FC<import("@cloakui/react-primitives/Typography").TypographyProps>;
        };
        h4?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component?: import("react").FC<import("@cloakui/react-primitives/Typography").TypographyProps>;
        };
        h5?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component?: import("react").FC<import("@cloakui/react-primitives/Typography").TypographyProps>;
        };
        h6?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component?: import("react").FC<import("@cloakui/react-primitives/Typography").TypographyProps>;
        };
    };
}) => import("@cloakwp/react").WPBlocksConfigReact;
