export declare const buttons: (userOverrides?: {
    meta?: {
        [x: string]: any;
    };
    dataRouter?: import("cloakwp/blocks/types").WPDataRouter<import("@cloakui/types").GenericParentComponentWithCx>;
    component?: import("react").FC<import("@cloakui/react-primitives").ReactGenericParentComponent>;
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
}) => import("@cloakwp/react").WPBlocksConfigReact;
//# sourceMappingURL=buttons.d.ts.map