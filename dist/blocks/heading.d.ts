/// <reference types="react" />
export declare const heading: (userOverrides?: Partial<{
    variantsRouter: (block: import("cloakwp").BlockDataWithExtraContext<any, Record<string, any>>) => string;
    variants: {
        h1: {
            dataRouter: import("cloakwp").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component: import("react").FC<import("@cloakui/react-primitives").TypographyProps>;
        };
        h2: {
            dataRouter: import("cloakwp").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component: import("react").FC<import("@cloakui/react-primitives").TypographyProps>;
        };
        h3: {
            dataRouter: import("cloakwp").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component: import("react").FC<import("@cloakui/react-primitives").TypographyProps>;
        };
        h4: {
            dataRouter: import("cloakwp").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component: import("react").FC<import("@cloakui/react-primitives").TypographyProps>;
        };
        h5: {
            dataRouter: import("cloakwp").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component: import("react").FC<import("@cloakui/react-primitives").TypographyProps>;
        };
        h6: {
            dataRouter: import("cloakwp").WPDataRouter<import("@cloakui/types").TTypographyProps>;
            component: import("react").FC<import("@cloakui/react-primitives").TypographyProps>;
        };
    };
}>) => import("cloakwp").BlocksConfig;
