/// <reference types="react" />
export declare const button: (userOverrides?: {
    variantsRouter?: (block: import("cloakcms").BlockDataWithExtraContext<import("cloakwp/blocks").RestApiBlockData>) => "default" | "link";
    variants?: {
        default?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter;
            component?: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
                variants?: import("@cloakui/styles").ButtonVariants;
                children?: import("react").ReactNode;
                asChild?: boolean;
            } & import("react").RefAttributes<HTMLButtonElement>>;
        };
        link?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter;
            component?: ({ href, children, ...rest }: any) => import("react/jsx-runtime").JSX.Element;
        };
    };
}) => import("@cloakwp/react").WPBlocksConfigReact;
