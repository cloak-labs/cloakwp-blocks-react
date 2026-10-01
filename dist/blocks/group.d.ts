export declare const group: (userOverrides?: {
    dataRouter?: import("cloakwp/blocks/types").WPDataRouter<import("@cloakui/types").ContainerProps>;
    component?: import("react").ForwardRefExoticComponent<import("@cloakui/types").ComponentStyleProps<import("react").CSSProperties, string> & {
        children?: React.ReactNode | (() => React.ReactNode);
    } & {
        cntrClassName?: string;
        as?: "article" | "aside" | "div" | "footer" | "header" | "main" | "section";
    } & import("react").RefAttributes<HTMLDivElement>>;
    nestedBlocks?: {
        trees?: (block: {
            innerBlocks?: import("cloakwp/blocks/types").RestApiBlockData[];
        }) => {
            blocks: import("cloakwp/blocks/types").RestApiBlockData[];
        }[];
        attach?: (props: Record<string, any>, rendered: {
            output: unknown;
        }[]) => void;
    }[];
    meta?: {
        [x: string]: any;
    };
}) => import("@cloakwp/react").WPBlocksConfigReact;
//# sourceMappingURL=group.d.ts.map