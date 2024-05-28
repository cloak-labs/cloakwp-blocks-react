/// <reference types="react" />
export declare const button: (userOverrides?: {
    variantsRouter?: (block: any) => "link" | "default";
    variants?: {
        default?: {
            dataRouter?: any;
            component?: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
                variants?: import("@cloakui/react-primitives/Button").ButtonVariants;
                children?: import("react").ReactNode;
                asChild?: boolean;
            } & import("react").RefAttributes<HTMLButtonElement>>;
        };
        link?: {
            dataRouter?: any;
            component?: ({ href, children, ...rest }: {
                [x: string]: any;
                href: any;
                children: any;
            }) => import("react/jsx-runtime").JSX.Element;
        };
    };
}) => BlocksConfig<TComponent, TBlockData>;
