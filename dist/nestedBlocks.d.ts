import type { RestApiBlockData } from "cloakwp/blocks";
/** Render `innerBlocks` into the `children` prop. */
export declare const innerBlocksChildren: {
    trees: (block: {
        innerBlocks?: RestApiBlockData[];
    }) => {
        blocks: RestApiBlockData[];
    }[];
    attach: (props: Record<string, any>, rendered: {
        output: unknown;
    }[]) => void;
};
/** Render column children with `fromParent.colSpans` for span layout. */
export declare const columnsNestedBlocks: {
    trees: (block: {
        innerBlocks?: RestApiBlockData[];
    }) => {
        blocks: RestApiBlockData[];
    }[];
    attach: (props: Record<string, any>, rendered: {
        output: unknown;
    }[]) => void;
    renderOptions: (block: {
        innerBlocks?: RestApiBlockData[];
    }) => {
        fromParent: {
            colSpans: number[];
        };
    };
};
//# sourceMappingURL=nestedBlocks.d.ts.map