export declare const button: (userOverrides?: {
    variantsRouter?: (block: import("@cloakui/block-renderer").BlockDataWithExtraContext<import("cloakwp/blocks/types").RestApiBlockData>) => "link" | "default";
    variants?: {
        default?: {
            dataRouter?: import("cloakwp/blocks/types").WPDataRouter;
            component?: import("react").ForwardRefExoticComponent<Omit<import("react").ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
                variants?: import("@cloakui/styles").ButtonVariants;
                children?: string | React.ReactNode;
                asChild?: boolean;
                className?: import("@cloakui/styles").ClassValue;
            } & import("react").RefAttributes<HTMLButtonElement>>;
        };
        link?: {
            dataRouter?: import("cloakwp/blocks/types").WPDataRouter;
            component?: ({ href, children, ...rest }: any) => import("react").JSX.Element;
        };
    };
    meta?: {
        [x: string]: any;
    };
}) => import("@cloakwp/react").WPBlocksConfigReact;
//# sourceMappingURL=button.d.ts.map