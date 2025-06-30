/// <reference types="react" />
export declare const button: (userOverrides?: {
    variantsRouter?: (block: import("cloakcms").BlockDataWithExtraContext<import("cloakwp/blocks").RestApiBlockData>) => "link" | "default";
    variants?: {
        default?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter;
            component?: import("react").ForwardRefExoticComponent<Omit<import("react").ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
                variants?: import("@cloakui/styles").ButtonVariants;
                children?: import("react").ReactNode;
                asChild?: boolean;
                className?: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | {
                    [x: string]: any;
                })[] | {
                    [x: string]: any;
                })[] | {
                    [x: string]: any;
                })[] | {
                    [x: string]: any;
                })[] | {
                    [x: string]: any;
                })[] | {
                    [x: string]: any;
                })[] | {
                    [x: string]: any;
                })[] | {
                    [x: string]: any;
                })[] | {
                    [x: string]: any;
                })[] | {
                    [x: string]: any;
                })[] | {
                    [x: string]: any;
                })[] | {
                    [x: string]: any;
                };
            } & import("react").RefAttributes<HTMLButtonElement>>;
        };
        link?: {
            dataRouter?: import("cloakwp/blocks").WPDataRouter;
            component?: ({ href, children, ...rest }: any) => import("react/jsx-runtime").JSX.Element;
        };
    };
    meta?: {
        [x: string]: any;
    };
}) => import("@cloakwp/react").WPBlocksConfigReact;
