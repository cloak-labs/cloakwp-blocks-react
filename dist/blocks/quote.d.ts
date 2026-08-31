/// <reference types="react" />
export declare const quote: (userOverrides?: {
    dataRouter?: import("cloakwp/blocks/types").WPDataRouter<import("@cloakui/types").TTypographyBlockquoteProps>;
    component?: import("react").FC<import("@cloakui/types").TTypographyBlockquoteProps>;
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
//# sourceMappingURL=quote.d.ts.map