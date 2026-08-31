import { getColumnsLayout } from "@cloakwp/container";
/** Render `innerBlocks` into the `children` prop. */
export const innerBlocksChildren = {
    trees: (block) => block.innerBlocks?.length ? [{ blocks: block.innerBlocks }] : [],
    attach: (props, rendered) => {
        props.children = rendered[0]?.output;
    },
};
/** Render column children with `fromParent.colSpans` for span layout. */
export const columnsNestedBlocks = {
    ...innerBlocksChildren,
    renderOptions: (block) => {
        const { colSpans } = getColumnsLayout(block.innerBlocks ?? []);
        return { fromParent: { colSpans } };
    },
};
