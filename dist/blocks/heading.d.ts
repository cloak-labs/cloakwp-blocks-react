/// <reference types="react" />
export declare const heading: (userOverrides?: Partial<{
    variantsRouter: (block: import("cloakcms").BlockDataWithExtraContext<import("react").ComponentClass<any, any> | import("react").FunctionComponent<any>, import("cloakwp/blocks").RestApiBlockData>) => string;
    variants: {
        h1: {
            dataRouter: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component: import("react").FC<import("@cloakui/react-primitives").TypographyProps>;
        };
        h2: {
            dataRouter: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component: import("react").FC<import("@cloakui/react-primitives").TypographyProps>;
        };
        h3: {
            dataRouter: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component: import("react").FC<import("@cloakui/react-primitives").TypographyProps>;
        };
        h4: {
            dataRouter: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component: import("react").FC<import("@cloakui/react-primitives").TypographyProps>;
        };
        h5: {
            dataRouter: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component: import("react").FC<import("@cloakui/react-primitives").TypographyProps>;
        };
        h6: {
            dataRouter: import("cloakwp/blocks").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component: import("react").FC<import("@cloakui/react-primitives").TypographyProps>;
        };
    };
}>) => import("@cloakwp/react").WPBlocksConfigReact;
