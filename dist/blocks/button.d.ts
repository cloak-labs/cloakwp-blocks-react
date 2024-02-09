/// <reference types="react" />
export declare const button: (userOverrides?: Partial<{
    variantsRouter: (block: import("cloakcms").BlockDataWithExtraContext<import("react").ComponentClass<any, any> | import("react").FunctionComponent<any>, import("cloakwp/blocks").RestApiBlockData>) => "link" | "default";
    variants: {
        default: {
            dataRouter: import("cloakwp/blocks").WPDataRouter;
            component: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
                variants?: import("@cloakui/react-primitives").ButtonVariants;
                children?: import("react").ReactNode;
                asChild?: boolean;
            } & import("react").RefAttributes<HTMLButtonElement>>;
        };
        link: {
            dataRouter: import("cloakwp/blocks").WPDataRouter;
            component: ({ href, children, ...rest }: any) => import("react/jsx-runtime").JSX.Element;
        };
    };
}>) => import("@cloakwp/react").WPBlocksConfigReact;
