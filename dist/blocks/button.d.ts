/// <reference types="react" />
export declare const button: (userOverrides?: Partial<{
    variantsRouter: (block: import("cloakwp").BlockDataWithExtraContext<any, Record<string, any>>) => "link" | "default";
    variants: {
        default: {
            dataRouter: import("cloakwp").WPDataRouter;
            component: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
                variants?: import("@cloakui/react-primitives").ButtonVariants;
                children?: import("react").ReactNode;
                asChild?: boolean;
            } & import("react").RefAttributes<HTMLButtonElement>>;
        };
        link: {
            dataRouter: import("cloakwp").WPDataRouter;
            component: ({ href, children, ...rest }: {
                [x: string]: any;
                href: any;
                children: any;
            }) => import("react/jsx-runtime").JSX.Element;
        };
    };
}>) => import("cloakwp").BlocksConfig;
